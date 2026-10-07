# RRFRetriever

Fuse child retriever rankings via reciprocal rank fusion.

## Example Usage

```typescript
import { RRFRetriever } from "@mistralai/mistralai/models/components";

let value: RRFRetriever = {
  type: "rrf",
  retrievers: [],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `topK`                               | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `type`                               | *"rrf"*                              | :heavy_check_mark:                   | N/A                                  |
| `retrievers`                         | *components.RRFRetrieverRetriever*[] | :heavy_check_mark:                   | N/A                                  |
| `weights`                            | *number*[]                           | :heavy_minus_sign:                   | N/A                                  |
| `rankConstant`                       | *number*                             | :heavy_minus_sign:                   | N/A                                  |
| `filter`                             | *components.RRFRetrieverFilter*      | :heavy_minus_sign:                   | N/A                                  |