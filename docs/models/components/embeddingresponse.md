# EmbeddingResponse

## Example Usage

```typescript
import { EmbeddingResponse } from "@mistralai/mistralai/models/components";

let value: EmbeddingResponse = {
  id: "cmpl-e5cc70bb28c444948073e77776eb30ef",
  object: "chat.completion",
  model: "mistral-small-latest",
  usage: {},
  data: [
    {
      object: "embedding",
      embedding: [
        0.1,
        0.2,
        0.3,
      ],
      index: 0,
    },
    {
      object: "embedding",
      embedding: [
        0.4,
        0.5,
        0.6,
      ],
      index: 1,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `id`                                                                                   | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | cmpl-e5cc70bb28c444948073e77776eb30ef                                                  |
| `object`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | chat.completion                                                                        |
| `model`                                                                                | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    | mistral-small-latest                                                                   |
| `usage`                                                                                | [components.UsageInfo](../../models/components/usageinfo.md)                           | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |
| `data`                                                                                 | [components.EmbeddingResponseData](../../models/components/embeddingresponsedata.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |