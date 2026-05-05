import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey });

const chatResponse = await client.chat.complete(
  {
    model: "mistral-medium-3-5",
    messages: [
      {
        role: "user",
        content:
          "John is one of 4 children. The first sister is 4 years old. " +
          "Next year, the second sister will be twice as old as the first sister. " +
          "The third sister is two years older than the second sister. " +
          "The third sister is half the age of her older brother. " +
          "How old is John?",
      },
    ],
    reasoningEffort: "high",
    temperature: 0.7,
  },
  // Bump request timeout because reasoning runs can be long.
  { timeoutMs: 300_000 },
);

// With reasoningEffort="high", message.content is an array of chunks.
// With reasoningEffort="none", message.content is a plain string.
const content = chatResponse.choices[0]?.message.content;
if (typeof content === "string") {
  console.log(content);
} else {
  for (const chunk of content ?? []) {
    if (chunk.type === "thinking") {
      console.log("--- thinking ---");
      for (const inner of chunk.thinking) {
        if (inner.type === "text") {
          console.log(inner.text);
        }
      }
      console.log("--- /thinking ---");
    } else if (chunk.type === "text") {
      console.log(chunk.text);
    }
  }
}
