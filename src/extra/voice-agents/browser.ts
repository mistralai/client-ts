import type { AudioSessionCreateResponse } from "../../models/components/index.js";

import { VoiceAgentDependencyError } from "./errors.js";
import type { BrowserVoiceEventMap } from "./events.js";
import { VoiceAgentSession } from "./session.js";
import {
  toAudioTool,
  type AudioTool,
  type FunctionHandler,
  type FunctionHandlers,
  type Tool,
} from "./tools.js";
import { isMissingModuleError, localFunctionHandlers } from "./utils.js";

const BROWSER_PACKAGE = "livekit-client";

async function loadBrowserTransport() {
  try {
    return await import("./transport/browser.js");
  } catch (error) {
    if (isMissingModuleError(error, BROWSER_PACKAGE)) {
      throw new VoiceAgentDependencyError(
        `Browser voice sessions need the audio transport package: npm install ${BROWSER_PACKAGE}`,
        { cause: error },
      );
    }
    throw error;
  }
}

export interface BrowserInitRequest {
  /**
   * Creates the session on your backend, which holds the API key. Receives the
   * declarations for `tools`, ready to pass straight to
   * `client.audio.sessions.create({ tools })` so the agent knows about the
   * browser-defined tools.
   */
  createSession: (
    tools: AudioTool[] | undefined,
  ) => Promise<AudioSessionCreateResponse>;
  deleteSession: (sessionId: string) => Promise<void>;
  /**
   * Function tools authored in the browser. Their declarations are
   * passed to `createSession` and their handlers run locally.
   */
  tools?: (Tool | FunctionHandler)[] | null;
  /** Handlers only, never forwarded to createSession. */
  functionHandlers?: FunctionHandlers | null;
}

/**
 * Browser counterpart of `client.audio.sessions.init()`.
 *
 * The API key never reaches the browser, so the session is created by your
 * backend through `createSession`. The returned session is not connected:
 * register callbacks, then `await session.connect()`.
 */
export async function initSession(
  request: BrowserInitRequest,
): Promise<VoiceAgentSession<BrowserVoiceEventMap>> {
  const declarations = request.tools?.map(toAudioTool);
  const handlers = localFunctionHandlers(
    request.tools,
    request.functionHandlers,
  );
  await loadBrowserTransport();
  const session = await request.createSession(declarations);

  return new VoiceAgentSession<BrowserVoiceEventMap>({
    session,
    functionHandlers: handlers,
    createTransport: async (emit) => {
      const { BrowserTransport } = await loadBrowserTransport();
      return new BrowserTransport(session, {
        emit,
        functionHandlers: handlers,
      });
    },
    deleteSession: () => request.deleteSession(session.id),
  });
}
