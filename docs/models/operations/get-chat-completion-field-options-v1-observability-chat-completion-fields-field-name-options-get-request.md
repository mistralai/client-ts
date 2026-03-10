# GetChatCompletionFieldOptionsV1ObservabilityChatCompletionFieldsFieldNameOptionsGetRequest

## Example Usage

```typescript
import {
  GetChatCompletionFieldOptionsV1ObservabilityChatCompletionFieldsFieldNameOptionsGetRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  GetChatCompletionFieldOptionsV1ObservabilityChatCompletionFieldsFieldNameOptionsGetRequest =
    {
      fieldName: "<value>",
      operator: "startswith",
    };
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `fieldName`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `operator`                                                 | [operations.Operator](../../models/operations/operator.md) | :heavy_check_mark:                                         | The operator to use for filtering options                  |