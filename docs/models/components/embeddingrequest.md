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

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `model`                                                                                                                  | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The ID of the model to be used for embedding.                                                                            | mistral-embed                                                                                                            |
| `inputs`                                                                                                                 | *components.EmbeddingRequestInputs*                                                                                      | :heavy_check_mark:                                                                                                       | The text content to be embedded, can be a string or an array of strings for fast processing in bulk.                     | [<br/>"Embed this sentence.",<br/>"As well as this one."<br/>]                                                           |
| `outputDimension`                                                                                                        | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | The dimension of the output embeddings when feature available. If not provided, a default output dimension will be used. |                                                                                                                          |
| `outputDtype`                                                                                                            | [components.EmbeddingDtype](../../models/components/embeddingdtype.md)                                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |
| `encodingFormat`                                                                                                         | [components.EncodingFormat](../../models/components/encodingformat.md)                                                   | :heavy_minus_sign:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |