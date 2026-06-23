import {
  trace,
  type Tracer,
  type TracerOptions,
  type TracerProvider,
} from "@opentelemetry/api";

import type { SDKOptions } from "../../lib/config.js";
import type { SecurityState } from "../../lib/security.js";
import { OTEL_SERVICE_NAME } from "./otel.js";
import { getRegisteredTracerProvider } from "./provider.js";

export const MISTRAL_SDK_TELEMETRY_ENV = "MISTRAL_SDK_TELEMETRY";
export const MISTRAL_TELEMETRY_BASE_URL = "https://api.mistral.ai";
export const MISTRAL_TELEMETRY_TRACES_PATH = "/telemetry/v1/traces";
export const MISTRAL_TELEMETRY_ENDPOINT = createTelemetryEndpoint(MISTRAL_TELEMETRY_BASE_URL);
export const MISTRAL_OTLP_TRACES_ENDPOINT_ENV = "MISTRAL_OTLP_TRACES_ENDPOINT";
export const TELEMETRY_PROVIDER_DEDICATED = "dedicated";
export const TELEMETRY_PROVIDER_GLOBAL = "global";

const DISABLED_VALUE = "false";
const PROVIDER_VALUES = [
  TELEMETRY_PROVIDER_DEDICATED,
  TELEMETRY_PROVIDER_GLOBAL,
] as const;

export type TelemetryProviderMode = typeof PROVIDER_VALUES[number];
export type TelemetrySetting = boolean | string | null | undefined;
export type TelemetryProvider = TelemetryProviderMode | TracerProvider;

export type ManagedTelemetryTracerProvider = TracerProvider & {
  shutdown?: () => void | Promise<void>;
  forceFlush?: () => void | Promise<void>;
};

export type TelemetryCapableTracingHook = {
  readonly _mistralTracingHook: true;
  tracerProvider: TracerProvider | undefined;
  _autoTelemetryProvider: ManagedTelemetryTracerProvider | undefined;
  _telemetryInitialization: Promise<boolean> | undefined;
  _telemetryConfigurationVersion: number;
  _telemetryAutoDisabled: boolean;
  _telemetryUseGlobalProvider: boolean;
};

type TelemetryContext = {
  baseURL?: string | URL | null | undefined;
  options?: SDKOptions | undefined;
  resolvedSecurity?: SecurityState | null | undefined;
};

type ClientWithHooks = {
  _baseURL?: string | URL | null | undefined;
  _options?: (SDKOptions & { hooks?: { beforeRequestHooks?: unknown[] } }) | undefined;
};

export type ModuleLoader = (specifier: string) => Promise<Record<string, unknown>>;

export type CreateTelemetryTracerProviderOptions = {
  apiKey: string | null | undefined;
  baseURL?: string | URL | null | undefined;
  moduleLoader?: ModuleLoader | undefined;
};

type CreateTelemetryTracerProvider = (
  options: CreateTelemetryTracerProviderOptions,
) => Promise<ManagedTelemetryTracerProvider>;

type ConfigureTelemetryForHookOptions = {
  telemetry?: TelemetrySetting;
  replaceExisting?: boolean | undefined;
  createTelemetryTracerProvider?: CreateTelemetryTracerProvider;
};

type OtelResource = { merge?: (resource: unknown) => unknown };
type OtelResourceConstructor = (new (attributes: Record<string, string>) => OtelResource) & {
  default?: () => OtelResource;
};

export class TelemetryConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "TelemetryConfigurationError";
  }
}

export async function configureTelemetry(
  client: ClientWithHooks,
  provider: TelemetryProvider = TELEMETRY_PROVIDER_DEDICATED,
): Promise<boolean> {
  const hook = getTracingHook(client);

  if (typeof provider === "string") {
    const providerMode = resolveProviderMode(provider);
    if (providerMode === TELEMETRY_PROVIDER_GLOBAL) {
      return useGlobalTracerProvider(hook, { replaceExisting: true });
    }

    return configureTelemetryForHook(
      hook,
      { baseURL: client._baseURL, options: client._options },
      { telemetry: providerMode, replaceExisting: true },
    );
  }

  markTelemetryConfigurationChanged(hook);
  await attachCustomTracerProvider(hook, provider);
  return true;
}

export async function setTracerProvider(
  client: ClientWithHooks,
  provider: TracerProvider,
): Promise<boolean> {
  return configureTelemetry(client, provider);
}

export function getTelemetryTracer(
  client: ClientWithHooks,
  name: string,
  version?: string,
  options?: TracerOptions,
): Tracer {
  const hook = getTracingHook(client);
  const providerMode = resolveMistralTelemetryEnv();
  return getClientTracerProvider(
    hook,
    providerMode === TELEMETRY_PROVIDER_GLOBAL,
  ).getTracer(name, version, options);
}

export async function configureTelemetryForHook(
  hook: TelemetryCapableTracingHook,
  context: TelemetryContext,
  options: ConfigureTelemetryForHookOptions = {},
): Promise<boolean> {
  const telemetryOverride = options.telemetry;
  const hasTelemetryOverride = telemetryOverride != null;
  const replaceExisting = options.replaceExisting === true;
  if (!hasTelemetryOverride && hasConfiguredAutoTelemetry(hook)) {
    return true;
  }
  if (!hasTelemetryOverride && hook._telemetryAutoDisabled) {
    return false;
  }

  const providerMode = hasTelemetryOverride
    ? resolveTelemetryMode(telemetryOverride)
    : resolveMistralTelemetryEnv();

  if (hook._telemetryInitialization !== undefined) {
    if (!replaceExisting && providerMode === TELEMETRY_PROVIDER_DEDICATED) {
      return hook._telemetryInitialization;
    }
    try {
      await hook._telemetryInitialization;
    } catch {
      // Allow explicit disable/global/replacement calls to proceed after a
      // failed in-flight auto-initialization.
    }
  }

  if (providerMode == null) {
    markTelemetryConfigurationChanged(hook);
    await shutdownTelemetryProvider(hook);
    markAutoTelemetryDisabled(hook);
    return false;
  }

  if (providerMode === TELEMETRY_PROVIDER_GLOBAL) {
    return useGlobalTracerProvider(hook, {
      replaceExisting: replaceExisting || hasTelemetryOverride,
    });
  }

  if (hook._autoTelemetryProvider !== undefined) {
    return true;
  }

  if (hook.tracerProvider !== undefined) {
    if (!replaceExisting) {
      return false;
    }
    hook.tracerProvider = undefined;
  }

  if (getRegisteredTracerProvider() !== undefined && !replaceExisting) {
    return false;
  }

  const configurationVersion = markTelemetryConfigurationChanged(hook);
  const initialization = initializeTelemetryProvider(
    hook,
    context,
    options,
    configurationVersion,
  );
  hook._telemetryInitialization = initialization;
  try {
    return await initialization;
  } finally {
    if (hook._telemetryInitialization === initialization) {
      hook._telemetryInitialization = undefined;
    }
  }
}

async function initializeTelemetryProvider(
  hook: TelemetryCapableTracingHook,
  context: TelemetryContext,
  options: ConfigureTelemetryForHookOptions,
  configurationVersion: number,
): Promise<boolean> {
  const createProvider = options.createTelemetryTracerProvider ?? _createTelemetryTracerProvider;
  const provider = await createProvider({
    apiKey: await resolveApiKey(context),
    baseURL: context.baseURL ?? context.options?.serverURL,
  });

  if (hook._telemetryConfigurationVersion !== configurationVersion) {
    await provider.shutdown?.();
    return false;
  }

  await attachTelemetryProvider(hook, provider);
  return true;
}

export async function _createTelemetryTracerProvider(
  options: CreateTelemetryTracerProviderOptions,
): Promise<ManagedTelemetryTracerProvider> {
  if (options.apiKey == null || options.apiKey === "") {
    throw new TelemetryConfigurationError(
      "Mistral telemetry requires an API key. Pass apiKey to the client or set MISTRAL_API_KEY.",
    );
  }

  const moduleLoader = options.moduleLoader ?? loadModule;
  let sdkTraceBase: Record<string, unknown>;
  let otlpExporterModule: Record<string, unknown>;
  let resourcesModule: Record<string, unknown>;
  try {
    [sdkTraceBase, otlpExporterModule, resourcesModule] = await Promise.all([
      moduleLoader("@opentelemetry/sdk-trace-base"),
      moduleLoader("@opentelemetry/exporter-trace-otlp-http"),
      moduleLoader("@opentelemetry/resources"),
    ]);
  } catch {
    throw new TelemetryConfigurationError(
      "Mistral telemetry requires optional OpenTelemetry SDK/exporter dependencies. " +
        "Install @opentelemetry/sdk-trace-base, @opentelemetry/exporter-trace-otlp-http, " +
        "and @opentelemetry/resources with your package manager.",
    );
  }

  const BasicTracerProvider = requireExportConstructor(
    sdkTraceBase,
    "BasicTracerProvider",
    "@opentelemetry/sdk-trace-base",
  );
  const BatchSpanProcessor = requireExportConstructor(
    sdkTraceBase,
    "BatchSpanProcessor",
    "@opentelemetry/sdk-trace-base",
  );
  const OTLPTraceExporter = requireExportConstructor(
    otlpExporterModule,
    "OTLPTraceExporter",
    "@opentelemetry/exporter-trace-otlp-http",
  );

  const exporter = new OTLPTraceExporter({
    url: resolveMistralTelemetryEndpoint(options.baseURL),
    headers: { Authorization: asBearerToken(options.apiKey) },
  });
  const spanProcessor = new BatchSpanProcessor(exporter);
  const resource = createResource(resourcesModule, {
    "service.name": OTEL_SERVICE_NAME,
  });

  const provider = new BasicTracerProvider({ resource }) as ManagedTelemetryTracerProvider & {
    addSpanProcessor?: (processor: unknown) => void;
  };
  if (typeof provider.addSpanProcessor === "function") {
    provider.addSpanProcessor(spanProcessor);
    return provider;
  }

  return new BasicTracerProvider({
    resource,
    spanProcessors: [spanProcessor],
  }) as ManagedTelemetryTracerProvider;
}

function getTracingHook(client: ClientWithHooks): TelemetryCapableTracingHook {
  const hooks = client._options?.hooks;
  const beforeRequestHooks = hooks?.beforeRequestHooks;
  if (!Array.isArray(beforeRequestHooks)) {
    throw new Error("Cannot configure telemetry: SDK hooks not initialised.");
  }

  const hook = beforeRequestHooks.find(isTelemetryCapableTracingHook);
  if (hook === undefined) {
    throw new Error("Cannot configure telemetry: TracingHook not found in the client's hooks.");
  }
  return hook;
}

function isTelemetryCapableTracingHook(
  hook: unknown,
): hook is TelemetryCapableTracingHook {
  return Boolean(
    hook &&
      typeof hook === "object" &&
      (hook as { _mistralTracingHook?: unknown })._mistralTracingHook === true,
  );
}

function getClientTracerProvider(
  hook: TelemetryCapableTracingHook,
  usesGlobalProvider: boolean,
): TracerProvider {
  if (hook.tracerProvider !== undefined) {
    return hook.tracerProvider;
  }

  if (!usesGlobalProvider && !hook._telemetryUseGlobalProvider) {
    const registeredProvider = getRegisteredTracerProvider();
    if (registeredProvider !== undefined) {
      return registeredProvider;
    }
  }

  return trace.getTracerProvider();
}

function resolveTelemetryMode(value: boolean | string): TelemetryProviderMode | null {
  if (typeof value === "boolean") {
    return value ? TELEMETRY_PROVIDER_DEDICATED : null;
  }

  const normalized = value.trim().toLowerCase();
  switch (normalized) {
    case TELEMETRY_PROVIDER_DEDICATED:
      return TELEMETRY_PROVIDER_DEDICATED;
    case TELEMETRY_PROVIDER_GLOBAL:
      return TELEMETRY_PROVIDER_GLOBAL;
    case DISABLED_VALUE:
      return null;
  }

  throw new TelemetryConfigurationError(
    `Invalid telemetry setting ${JSON.stringify(value)}. Expected one of: dedicated, false, global.`,
  );
}

function resolveProviderMode(value: string): TelemetryProviderMode {
  const normalized = value.trim().toLowerCase();
  switch (normalized) {
    case TELEMETRY_PROVIDER_DEDICATED:
      return TELEMETRY_PROVIDER_DEDICATED;
    case TELEMETRY_PROVIDER_GLOBAL:
      return TELEMETRY_PROVIDER_GLOBAL;
  }

  throw new TelemetryConfigurationError(
    `Invalid telemetry provider ${JSON.stringify(value)}. Expected one of: dedicated, global.`,
  );
}

function resolveMistralTelemetryEnv(): TelemetryProviderMode | null {
  const envValue = readEnv(MISTRAL_SDK_TELEMETRY_ENV);
  if (envValue == null || envValue === "") {
    return null;
  }

  try {
    return resolveTelemetryMode(envValue);
  } catch {
    throw new TelemetryConfigurationError(
      `Invalid ${MISTRAL_SDK_TELEMETRY_ENV}=${JSON.stringify(envValue)}. ` +
        "Expected one of: dedicated, false, global.",
    );
  }
}

async function resolveApiKey(context: TelemetryContext): Promise<string> {
  const authHeader = context.resolvedSecurity?.headers?.["Authorization"];
  if (authHeader) {
    return authHeader;
  }

  const apiKey = await resolveApiKeySource(context.options?.apiKey);
  if (apiKey) {
    return apiKey;
  }

  const envApiKey = readEnv("MISTRAL_API_KEY");
  if (envApiKey) {
    return envApiKey;
  }

  throw new TelemetryConfigurationError(
    "Mistral telemetry requires an API key. Pass apiKey to the client or set MISTRAL_API_KEY.",
  );
}

async function resolveApiKeySource(
  source: SDKOptions["apiKey"],
): Promise<string | undefined> {
  if (source == null) {
    return undefined;
  }
  return typeof source === "function" ? source() : source;
}

function resolveMistralTelemetryEndpoint(baseURL?: string | URL | null): string {
  const endpoint = readEnv(MISTRAL_OTLP_TRACES_ENDPOINT_ENV)?.trim();
  if (endpoint) {
    return endpoint;
  }
  if (baseURL != null && `${baseURL}`.trim() !== "") {
    return createTelemetryEndpoint(baseURL);
  }
  return MISTRAL_TELEMETRY_ENDPOINT;
}

function createTelemetryEndpoint(baseURL: string | URL): string {
  return new URL(MISTRAL_TELEMETRY_TRACES_PATH, baseURL).toString();
}

async function attachTelemetryProvider(
  hook: TelemetryCapableTracingHook,
  provider: ManagedTelemetryTracerProvider,
): Promise<void> {
  await shutdownTelemetryProvider(hook);
  hook.tracerProvider = provider;
  hook._autoTelemetryProvider = provider;
  hook._telemetryUseGlobalProvider = false;
  hook._telemetryAutoDisabled = false;
}

function hasConfiguredAutoTelemetry(hook: TelemetryCapableTracingHook): boolean {
  return hook._autoTelemetryProvider !== undefined || hook._telemetryUseGlobalProvider;
}

function markAutoTelemetryDisabled(hook: TelemetryCapableTracingHook): void {
  hook._telemetryUseGlobalProvider = false;
  hook._telemetryAutoDisabled = true;
}

function markTelemetryConfigurationChanged(hook: TelemetryCapableTracingHook): number {
  hook._telemetryConfigurationVersion += 1;
  return hook._telemetryConfigurationVersion;
}

async function attachCustomTracerProvider(
  hook: TelemetryCapableTracingHook,
  provider: TracerProvider,
): Promise<void> {
  await shutdownTelemetryProvider(hook);
  hook.tracerProvider = provider;
  hook._telemetryUseGlobalProvider = false;
  hook._telemetryAutoDisabled = false;
}

async function useGlobalTracerProvider(
  hook: TelemetryCapableTracingHook,
  options: { replaceExisting: boolean },
): Promise<boolean> {
  if (
    hook.tracerProvider !== undefined &&
    hook._autoTelemetryProvider === undefined &&
    !options.replaceExisting
  ) {
    return false;
  }

  markTelemetryConfigurationChanged(hook);
  await shutdownTelemetryProvider(hook);
  hook.tracerProvider = undefined;
  hook._telemetryUseGlobalProvider = true;
  hook._telemetryAutoDisabled = true;
  return true;
}

async function shutdownTelemetryProvider(
  hook: TelemetryCapableTracingHook,
): Promise<void> {
  const provider = hook._autoTelemetryProvider;
  if (provider === undefined) {
    return;
  }

  hook._autoTelemetryProvider = undefined;
  if (hook.tracerProvider === provider) {
    hook.tracerProvider = undefined;
  }
  await provider.shutdown?.();
}

function asBearerToken(apiKey: string): string {
  return apiKey.toLowerCase().startsWith("bearer ") ? apiKey : `Bearer ${apiKey}`;
}

function readEnv(name: string): string | undefined {
  try {
    const denoEnv = (globalThis as { Deno?: { env?: { get?: (key: string) => string | undefined } } })
      .Deno?.env;
    const denoValue = denoEnv?.get?.(name);
    if (denoValue !== undefined) {
      return denoValue;
    }
  } catch {
    // Ignore unavailable Deno permissions.
  }

  try {
    return (globalThis as { process?: { env?: Record<string, string | undefined> } })
      .process?.env?.[name];
  } catch {
    return undefined;
  }
}

async function loadModule(specifier: string): Promise<Record<string, unknown>> {
  return await import(specifier) as Record<string, unknown>;
}

function requireExportConstructor(
  moduleExports: Record<string, unknown>,
  exportName: string,
  moduleName: string,
): new (...args: unknown[]) => unknown {
  const value = moduleExports[exportName];
  if (typeof value !== "function") {
    throw new TelemetryConfigurationError(
      `Mistral telemetry expected ${moduleName} to export ${exportName}.`,
    );
  }
  return value as new (...args: unknown[]) => unknown;
}

function createResource(
  moduleExports: Record<string, unknown>,
  attributes: Record<string, string>,
): unknown {
  const resourceFromAttributes = moduleExports["resourceFromAttributes"];
  if (typeof resourceFromAttributes === "function") {
    return resourceFromAttributes(attributes);
  }

  const Resource = moduleExports["Resource"] as OtelResourceConstructor | undefined;
  if (typeof Resource !== "function") {
    return { attributes };
  }

  const resource = new Resource(attributes);
  const defaultResource = Resource.default?.();
  return defaultResource?.merge?.(resource) ?? resource;
}
