# ResponsesEasyInputMessage

## Example Usage

```typescript
import { ResponsesEasyInputMessage } from "@mistralai/mistralai/models/components";

let value: ResponsesEasyInputMessage = {
  content: "<value>",
  role: "developer",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `content`                                                                                              | *components.ResponsesEasyInputMessageContent2*                                                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `role`                                                                                                 | [components.ResponsesEasyInputMessageRole](../../models/components/responseseasyinputmessagerole.md)   | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `phase`                                                                                                | [components.ResponsesEasyInputMessagePhase](../../models/components/responseseasyinputmessagephase.md) | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `type`                                                                                                 | *"message"*                                                                                            | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |
| `additionalProperties`                                                                                 | Record<string, *any*>                                                                                  | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |