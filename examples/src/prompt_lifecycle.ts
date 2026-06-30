import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey });

// A prompt is a versioned template. `variables` declares the placeholder names
// used in `content`; callers fill in the values themselves when they use the
// prompt (the registry stores the template, it does not render it).
const prompt = await client.beta.prompts.create({
  name: "welcome-email",
  definition: {
    content: "Welcome to {{company}}! Great to have you in {{city}}.",
    variables: [{ name: "city" }, { name: "company" }],
  },
  title: "Welcome email",
  notes: "initial draft",
});
const promptId = prompt.id!;
console.log(`created prompt ${promptId} (v${prompt.version})`);

// Iterate: a new definition creates a new immutable version. Passing `aliases`
// re-points "production" to the new version in one call.
await client.beta.prompts.createVersion(promptId, {
  definition: {
    content: "👋 Welcome to {{company}} — enjoy {{city}}!",
    variables: [{ name: "city" }, { name: "company" }],
  },
  notes: "warmer tone",
  aliases: ["production"],
});

// Read what "production" serves (latest by default; or pin version/alias).
const live = await client.beta.prompts.get({ promptId, alias: "production" });
console.log(`production -> v${live.version}: ${live.definition?.content}`);

await client.beta.prompts.delete({ promptId });
