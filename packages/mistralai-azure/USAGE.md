<!-- Start SDK Example Usage [usage] -->
### Create Chat Completions

This example shows how to create chat completions.

```typescript
import { MistralAzure } from "@mistralai/mistralai-azure";

const mistralAzure = new MistralAzure({
    apiKey: process.env.["AZURE_API_KEY"],
    endpoint: process.env.["AZURE_ENDPOINT"],
});

async function run() {
    const result = await mistralAzure.chat.complete({
        model: "azureai",
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