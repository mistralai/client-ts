# SearchTracesV1ObservabilityTracesSearchPostRequest

## Example Usage

```typescript
import { SearchTracesV1ObservabilityTracesSearchPostRequest } from "@mistralai/mistralai/models/operations";

let value: SearchTracesV1ObservabilityTracesSearchPostRequest = {
  tracesRequest: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tracesRequest`                                                                               | [components.TracesRequest](../../models/components/tracesrequest.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |