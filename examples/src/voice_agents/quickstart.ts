/* eslint-disable no-console, n/no-process-env */

//   export MISTRAL_API_KEY=...
//   npm run script -- ./src/voice_agents/quickstart.ts
//
// Requires SoX (`brew install sox`) and Node 24 or newer, for `await using`.

import * as z from "zod/v4";

import { Mistral } from "@mistralai/mistralai";
import { functionTool } from "@mistralai/mistralai/extra/voice-agents";
import { DefaultAudioInterface } from "@mistralai/mistralai/extra/voice-agents/audio/node";

const getWeather = functionTool({
  name: "getWeather",
  description: "Return the current weather for a city.",
  parameters: z.object({ city: z.string() }),
  filler: { text: "Let me look that up." },
  handler: ({ city }) => ({ city, tempC: 21, conditions: "sunny" }),
});

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) throw new Error("MISTRAL_API_KEY is required");

const client = new Mistral({ apiKey });

await using session = await client.audio.sessions.init({
  llm: { model: "mistral-small-latest" },
  stt: { model: "voxtral-mini-transcribe-realtime-3" },
  tts: { model: "voxtral-mini-tts-3" },
  instructions:
    "You are a concise voice assistant. Call getWeather whenever the user " +
    "asks about the weather somewhere.",
  welcomeMessage: "Hey. Ask me about the weather somewhere.",
  tools: [getWeather],
  audioInterface: new DefaultAudioInterface(),
});

session.on("transcript", (event) => {
  console.log(`${event.role}: ${event.content}`);
});
session.on("tool_call_started", (event) => {
  console.log(`tool -> ${event.name}`);
});
session.on("tool_call_ended", (event) => {
  console.log(`tool <- ${event.name}(${event.arguments}) = ${event.result}`);
});
session.on("agent_state_changed", (event) => {
  console.log(`agent is ${event.state}`);
});
session.on("error", (event) => {
  console.error(`[${event.source}/${event.code}] ${event.message}`);
});

process.once("SIGINT", () => {
  void session.close("user_interrupt").catch(console.error);
});

await session.connect();
console.log("Connected. Start speaking; press Ctrl+C to stop.");
await session.wait();
