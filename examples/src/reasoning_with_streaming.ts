import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey });

// While the model is thinking, delta.content is an array containing a
// ThinkChunk. After the thinking phase ends, delta.content arrives as
// plain string fragments. The transition event may contain both a closing
// ThinkChunk and the first TextChunk in a single array.
const stream = await client.chat.stream(
  {
    model: "mistral-medium-3-5",
    messages: [
      {
        role: "user",
        content:
          "If a train leaves Paris at 9am going 120 km/h and another " +
          "leaves Lyon at 10am going 150 km/h on the same track, " +
          "when do they meet? Paris-Lyon is 465 km.",
      },
    ],
    reasoningEffort: "high",
    temperature: 0.7,
  },
  // Bump request timeout because reasoning runs can be long.
  { timeoutMs: 300_000 },
);

let inThinking = false;
for await (const event of stream) {
  const delta = event.data?.choices[0]?.delta.content;
  if (!delta) continue;

  if (typeof delta === "string") {
    if (inThinking) {
      process.stdout.write("\n--- /thinking ---\n");
      inThinking = false;
    }
    process.stdout.write(delta);
    continue;
  }

  for (const chunk of delta) {
    if (chunk.type === "thinking") {
      if (!inThinking) {
        process.stdout.write("--- thinking ---\n");
        inThinking = true;
      }
      for (const inner of chunk.thinking) {
        if (inner.type === "text") {
          process.stdout.write(inner.text);
        }
      }
    } else if (chunk.type === "text") {
      if (inThinking) {
        process.stdout.write("\n--- /thinking ---\n");
        inThinking = false;
      }
      process.stdout.write(chunk.text);
    }
  }
}

process.stdout.write("\n");
