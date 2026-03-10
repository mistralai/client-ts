# ResponseErrorEvent

## Example Usage

```typescript
import { ResponseErrorEvent } from "@mistralai/mistralai/models/components";

let value: ResponseErrorEvent = {
  type: "conversation.response.error",
  message: "<value>",
  code: 451589,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | *"conversation.response.error"*                                                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |