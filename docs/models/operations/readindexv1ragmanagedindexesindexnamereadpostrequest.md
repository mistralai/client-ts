# ReadIndexV1RagManagedIndexesIndexNameReadPostRequest

## Example Usage

```typescript
import { ReadIndexV1RagManagedIndexesIndexNameReadPostRequest } from "@mistralai/mistralai/models/operations";

let value: ReadIndexV1RagManagedIndexesIndexNameReadPostRequest = {
  indexName: "<value>",
  readRequest: {
    sourceId: "<id>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `indexName`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `readRequest`                                                    | [components.ReadRequest](../../models/components/readrequest.md) | :heavy_check_mark:                                               | N/A                                                              |