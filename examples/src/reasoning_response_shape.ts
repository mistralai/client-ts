// Print the raw shape of a chat response when using `reasoningEffort`.
// Run this first to see what ThinkChunk / TextChunk look like in the wire
// format, then move on to the other reasoning_*.ts examples.

import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey });

const prompt = "What is 12 * 14? Answer in one short sentence.";

for (const effort of ["high", "none"] as const) {
  console.log(`\n========== reasoningEffort=${JSON.stringify(effort)} ==========`);
  const response = await client.chat.complete(
    {
      model: "mistral-medium-3-5",
      messages: [{ role: "user", content: prompt }],
      reasoningEffort: effort,
      temperature: 0.7,
    },
    // Bump request timeout because reasoning runs can be long.
    { timeoutMs: 300_000 },
  );

  const content = response.choices[0]?.message?.content;
  console.log(`typeof content = ${Array.isArray(content) ? "Array" : typeof content}`);
  console.log("content =");
  console.log(JSON.stringify(content, null, 2));
}
