# NavigateIndexV1RagManagedIndexesIndexNameNavigatePostRequest

## Example Usage

```typescript
import { NavigateIndexV1RagManagedIndexesIndexNameNavigatePostRequest } from "@mistralai/mistralai/models/operations";

let value: NavigateIndexV1RagManagedIndexesIndexNameNavigatePostRequest = {
  indexName: "<value>",
  navigateRequest: {
    sourceId: "<id>",
    startOffset: 440061,
    endOffset: 966237,
    direction: "next",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `indexName`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `navigateRequest`                                                        | [components.NavigateRequest](../../models/components/navigaterequest.md) | :heavy_check_mark:                                                       | N/A                                                                      |