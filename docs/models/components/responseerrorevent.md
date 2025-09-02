# ResponseErrorEvent

## Example Usage

```typescript
import { ResponseErrorEvent } from "@mistralai/mistralai/models/components";

let value: ResponseErrorEvent = {
  message: "<value>",
  code: 451589,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `type`                                                                                        | [components.ResponseErrorEventType](../../models/components/responseerroreventtype.md)        | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `message`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `code`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |