import { Hooks } from "./types.js";
import { CustomUserAgentHook } from "./custom_user_agent.js";
import { DeprecationWarningHook } from "./deprecation_warning.js";
import { ServiceAccountAuthHook } from "./service_account_auth.js";
import { TraceparentInjectionHook } from "./traceparent.js";
import { TracingHook } from "./tracing.js";
import { WorkflowEncodingHook } from "./workflow_encoding.js";
import { WorkflowStreamErrorHook } from "./workflow_stream_error.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */


export function initHooks(hooks: Hooks) {
    // Add hooks by calling hooks.register{ClientInit/BeforeCreateRequest/BeforeRequest/AfterSuccess/AfterError}Hook
    // with an instance of a hook that implements that specific Hook interface
    // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance
    const serviceAccountAuthHook = new ServiceAccountAuthHook();
    hooks.registerBeforeRequestHook(serviceAccountAuthHook)

    const customUserAgentHook = new CustomUserAgentHook();
    hooks.registerBeforeRequestHook(customUserAgentHook)

    const traceparentInjectionHook = new TraceparentInjectionHook();
    hooks.registerBeforeRequestHook(traceparentInjectionHook)

    const deprecationWarningHook = new DeprecationWarningHook();
    hooks.registerAfterSuccessHook(deprecationWarningHook)

    // Registered before TracingHook: requests are encoded before the tracing
    // hook reads their body, and responses are decoded innermost.
    const workflowEncodingHook = new WorkflowEncodingHook();
    hooks.registerBeforeRequestHook(workflowEncodingHook)
    hooks.registerAfterSuccessHook(workflowEncodingHook)

    // Registered before TracingHook so its wrapper stays innermost: TracingHook
    // may replace the response with its own body-wrapping one.
    const workflowStreamErrorHook = new WorkflowStreamErrorHook();
    hooks.registerAfterSuccessHook(workflowStreamErrorHook)

    const tracingHook = new TracingHook();
    hooks.registerBeforeRequestHook(tracingHook)
    hooks.registerAfterSuccessHook(tracingHook)
    hooks.registerAfterErrorHook(tracingHook)
    hooks.registerSDKInitHook(tracingHook)
}
