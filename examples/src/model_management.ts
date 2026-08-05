/**
 * Managing fine-tuned models with `client.models.*`.
 *
 * The fine-tuning training API (`client.fineTuning.jobs.*`) has been retired: the
 * fine-tuning training product was sunset and those routes now return 410 Gone,
 * with no in-SDK replacement. The fine-tuned models you already own are still
 * managed through `client.models.*` (retrieve, update, archive, unarchive,
 * delete). For running large asynchronous inference jobs, see
 * `async_batch_jobs.ts`.
 *
 * The read-only list and retrieve run unconditionally. Set
 * MISTRAL_FINE_TUNED_MODEL_ID to also exercise the update / archive / unarchive
 * management flow against a model you own.
 */
import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey });

const listed = await client.models.list();
const fineTuned = (listed.data ?? []).filter(
  (model): model is Extract<typeof model, { type: "fine-tuned" }> =>
    model.type === "fine-tuned",
);
console.log(`Found ${fineTuned.length} fine-tuned model(s).`);

const firstFineTuned = fineTuned[0];
if (firstFineTuned) {
  const retrieved = await client.models.retrieve({
    modelId: firstFineTuned.id,
  });
  console.log(retrieved);
}

const modelId = process.env["MISTRAL_FINE_TUNED_MODEL_ID"];
if (!modelId) {
  console.log(
    "Set MISTRAL_FINE_TUNED_MODEL_ID to run the update / archive / unarchive flow.",
  );
} else {
  const updated = await client.models.update({
    modelId,
    updateModelRequest: {
      name: "my-fine-tuned-model",
      description: "Updated via the fine-tuned model management example",
    },
  });
  console.log(updated);

  const archived = await client.models.archive({ modelId });
  console.log(archived);

  const unarchived = await client.models.unarchive({ modelId });
  console.log(unarchived);
}
