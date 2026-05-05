// Multi-turn conversation with a reasoning model.
//
// IMPORTANT: for Mistral Medium 3.5, always replay the assistant turn
// back into `messages` with its ThinkChunks intact. Dropping the
// reasoning trace across turns DEGRADES the model's performance.
//
// This example runs a 3-turn math chain and prints per-turn token
// usage. The prompt grows as the reasoning trace accumulates; that
// growth is expected.

import { Mistral } from "@mistralai/mistralai";
import type { ChatCompletionRequestMessage } from "@mistralai/mistralai/models/components";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const MODEL = "mistral-medium-3-5";
const TURNS = [
  "What is 17 * 23?",
  "Now multiply that by 3.",
  "And subtract 100 from the result.",
];

function finalText(content: unknown): string {
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .filter((c): c is { type: "text"; text: string } => c?.type === "text")
    .map((c) => c.text)
    .join("");
}

const client = new Mistral({ apiKey });

const messages: ChatCompletionRequestMessage[] = [];
let totalPrompt = 0;
let totalCompletion = 0;

for (let i = 0; i < TURNS.length; i++) {
  messages.push({ role: "user", content: TURNS[i]! });

  const response = await client.chat.complete(
    {
      model: MODEL,
      messages,
      reasoningEffort: "high",
      temperature: 0.7,
    },
    // Bump request timeout because reasoning runs can be long.
    { timeoutMs: 300_000 },
  );

  const message = response.choices[0]!.message!;
  const promptTokens = response.usage.promptTokens ?? 0;
  const completionTokens = response.usage.completionTokens ?? 0;
  totalPrompt += promptTokens;
  totalCompletion += completionTokens;

  console.log(
    `turn ${i + 1}: prompt=${String(promptTokens).padStart(4)} ` +
      `completion=${String(completionTokens).padStart(4)}  -> ${finalText(message.content)}`,
  );

  // Append the full assistant message back into history so the
  // ThinkChunks are preserved across turns.
  messages.push({
    role: "assistant",
    content: message.content,
  });
}

console.log(
  `TOTAL: prompt=${totalPrompt} completion=${totalCompletion} ` +
    `(sum ${totalPrompt + totalCompletion})`,
);
