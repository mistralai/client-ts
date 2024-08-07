<!-- Start SDK Example Usage [usage] -->
### Create Chat Completions

This example shows how to create chat completions.

```typescript
import { MistralGoogleCloud } from "@mistralai/mistralai-gcp";

const mistralGoogleCloud = new MistralGoogleCloud({
    region: "europe-west4",
    projectId: process.env["GOOGLE_PROJECT_ID"],
});

async function run() {
    const result = await mistralGoogleCloud.chat.complete({
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