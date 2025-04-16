# EmbeddingRequest

## Example Usage

```typescript
import { EmbeddingRequest } from "@mistralai/mistralai/models/components";

let value: EmbeddingRequest = {
  model: "mistral-embed",
  inputs: [
    "Embed this sentence.",
    "As well as this one.",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `model`                                            | *string*                                           | :heavy_check_mark:                                 | ID of the model to use.                            | mistral-embed                                      |
| `inputs`                                           | *components.EmbeddingRequestInputs*                | :heavy_check_mark:                                 | Text to embed.                                     | [<br/>"Embed this sentence.",<br/>"As well as this one."<br/>] |