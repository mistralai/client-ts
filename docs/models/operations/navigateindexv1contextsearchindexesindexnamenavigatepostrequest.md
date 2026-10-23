# NavigateIndexV1ContextSearchIndexesIndexNameNavigatePostRequest

## Example Usage

```typescript
import { NavigateIndexV1ContextSearchIndexesIndexNameNavigatePostRequest } from "@mistralai/mistralai/models/operations";

let value: NavigateIndexV1ContextSearchIndexesIndexNameNavigatePostRequest = {
  indexName: "<value>",
  navigateRequest: {
    sourceId: "<id>",
    startOffset: 726878,
    endOffset: 806474,
    direction: "next",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `indexName`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `navigateRequest`                                                        | [components.NavigateRequest](../../models/components/navigaterequest.md) | :heavy_check_mark:                                                       | N/A                                                                      |