# GrepIndexV1ContextSearchIndexesIndexNameGrepPostRequest

## Example Usage

```typescript
import { GrepIndexV1ContextSearchIndexesIndexNameGrepPostRequest } from "@mistralai/mistralai/models/operations";

let value: GrepIndexV1ContextSearchIndexesIndexNameGrepPostRequest = {
  indexName: "<value>",
  grepRequest: {
    sourceId: "<id>",
    pattern: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `indexName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `grepRequest`                                                    | [components.GrepRequest](../../models/components/greprequest.md) | :heavy_check_mark:                                               | N/A                                                              |