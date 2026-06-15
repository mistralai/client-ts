# SearchSpansV1ObservabilitySpansSearchPostRequest

## Example Usage

```typescript
import { SearchSpansV1ObservabilitySpansSearchPostRequest } from "@mistralai/mistralai/models/operations";

let value: SearchSpansV1ObservabilitySpansSearchPostRequest = {
  spansRequest: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `spansRequest`                                                                                | [components.SpansRequest](../../models/components/spansrequest.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |