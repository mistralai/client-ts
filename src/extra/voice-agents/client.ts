import type { MistralCore } from "../../core.js";
import { audioSessionsClose } from "../../funcs/audioSessionsClose.js";
import { audioSessionsCreate } from "../../funcs/audioSessionsCreate.js";
import type { RequestOptions } from "../../lib/sdks.js";
import type {
  AudioLLMConfig,
  AudioSTTConfig,
  AudioTTSConfig,
  AudioTurnConfig,
} from "../../models/components/index.js";
import { unwrapAsync } from "../../types/fp.js";

import type { AudioInterface } from "./audio/audio.js";
import {
  VoiceAgentConfigurationError,
  VoiceAgentConnectionError,
  VoiceAgentDependencyError,
  VoiceAgentError,
} from "./errors.js";
import { VoiceAgentSession } from "./session.js";
import {
  toAudioTool,
  type FunctionHandler,
  type FunctionHandlers,
  type Tool,
} from "./tools.js";
import { isMissingModuleError, localFunctionHandlers } from "./utils.js";

const RTC_NODE_PACKAGE = "@livekit/rtc-node";

export interface VoiceAgentInitRequest {
  llm?: AudioLLMConfig | undefined;
  stt?: AudioSTTConfig | undefined;
  tts?: AudioTTSConfig | undefined;
  turn?: AudioTurnConfig | undefined;
  instructions?: string | null | undefined;
  /**
   * The full remote declaration list: omitted inherits it, null clears it, and
   * a nonempty array replaces it. A `functionTool()` handler listed here
   * submits its declaration and registers its handler in one go.
   */
  tools?: (Tool | FunctionHandler)[] | null | undefined;
  /** Local handlers only; never changes the remote configuration. */
  functionHandlers?: FunctionHandlers | null | undefined;
  welcomeMessage?: string | null | undefined;
  agentId?: string | null | undefined;
  agentVersion?: number | null | undefined;
  audioInterface?: AudioInterface | undefined;
}

async function loadNodeTransport() {
  try {
    return await import(/* webpackIgnore: true */ "./transport/node.js");
  } catch (error) {
    if (isMissingModuleError(error, RTC_NODE_PACKAGE)) {
      throw new VoiceAgentDependencyError(
        `Node voice sessions need an optional peer dependency: npm install ${RTC_NODE_PACKAGE}`,
        { cause: error },
      );
    }
    throw error;
  }
}

function closeRequestOptions(
  options: RequestOptions | undefined,
): RequestOptions | undefined {
  if (options == null) return undefined;
  const { signal, fetchOptions, ...rest } = options;
  const { signal: fetchSignal, ...keptFetchOptions } = fetchOptions ?? {};
  const headers = options.headers ?? fetchOptions?.headers;
  return {
    ...rest,
    ...(fetchOptions === undefined ? {} : { fetchOptions: keptFetchOptions }),
    ...(headers === undefined ? {} : { headers: new Headers(headers) }),
  };
}

/**
 * Create the remote session and return it ready to connect.
 *
 * The session and the agent exist from here on: register callbacks, then call
 * `await session.connect()` within the session's join window. `close()` gives
 * it up without connecting, and `await using` calls that for you.
 */
export async function init(
  client: MistralCore,
  request: VoiceAgentInitRequest = {},
  options?: RequestOptions,
): Promise<VoiceAgentSession> {
  const declarations =
    request.tools == null ? request.tools : request.tools.map(toAudioTool);

  const handlers = localFunctionHandlers(
    request.tools,
    request.functionHandlers,
  );

  if (request.agentVersion != null) {
    if (request.agentId == null) {
      throw new VoiceAgentConfigurationError("agentVersion requires agentId");
    }
    if (request.agentVersion < 1) {
      throw new VoiceAgentConfigurationError("agentVersion must be positive");
    }
  }

  await loadNodeTransport();

  // Fail on a missing microphone before creating the session.
  if (request.audioInterface?.preflight != null) {
    try {
      await request.audioInterface.preflight();
    } catch (error) {
      if (error instanceof VoiceAgentError) throw error;
      throw new VoiceAgentConnectionError(
        `Audio interface is unavailable: ${error instanceof Error ? error.message : String(error)}`,
        { cause: error },
      );
    }
  }

  const session = await unwrapAsync(audioSessionsCreate(
    client,
    {
      llm: request.llm,
      stt: request.stt,
      tts: request.tts,
      turn: request.turn,
      instructions: request.instructions,
      tools: declarations,
      welcomeMessage: request.welcomeMessage,
      agentId: request.agentId,
      agentVersion: request.agentVersion,
    },
    options,
  ));

  const closeOptions = closeRequestOptions(options);

  return new VoiceAgentSession({
    session,
    functionHandlers: handlers,
    createTransport: async (emit) => {
      const { NodeTransport } = await loadNodeTransport();
      return new NodeTransport(session, { emit, functionHandlers: handlers });
    },
    deleteSession: async () => {
      await unwrapAsync(audioSessionsClose(
        client,
        { sessionId: session.id },
        closeOptions,
      ));
    },
    audioInterface: request.audioInterface,
  });
}
