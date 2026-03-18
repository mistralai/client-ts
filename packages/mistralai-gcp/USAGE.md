<!-- Start SDK Example Usage [usage] -->
### Create Chat Completions

This example shows how to create chat completions.

```typescript
import { MistralGCP } from "@mistralai/mistralai-gcp";

const mistralGCP = new MistralGCP({
    region: "europe-west4",
    projectId: process.env["GOOGLE_PROJECT_ID"],
});

async function run() {
    const result = await mistralGCP.chat.complete({
        model: "mistral-small-latest",
        messages: [
            {
                content: "Who is the best French painter? Answer in one short sentence.",
                role: "user",
            },
        ],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->