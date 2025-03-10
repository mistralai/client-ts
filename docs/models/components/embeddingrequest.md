# EmbeddingRequest

## Example Usage

```typescript
import { EmbeddingRequest } from "@mistralai/mistralai/models/components";

let value: EmbeddingRequest = {
  inputs: [
    "Embed this sentence.",
    "As well as this one.",
  ],
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `model`                                            | *string*                                           | :heavy_minus_sign:                                 | ID of the model to use.                            |                                                    |
| `inputs`                                           | *components.Inputs*                                | :heavy_check_mark:                                 | Text to embed.                                     | [<br/>"Embed this sentence.",<br/>"As well as this one."<br/>] |