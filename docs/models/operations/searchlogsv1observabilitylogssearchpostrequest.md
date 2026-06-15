# SearchLogsV1ObservabilityLogsSearchPostRequest

## Example Usage

```typescript
import { SearchLogsV1ObservabilityLogsSearchPostRequest } from "@mistralai/mistralai/models/operations";

let value: SearchLogsV1ObservabilityLogsSearchPostRequest = {
  logsRequest: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `logsRequest`                                                                                 | [components.LogsRequest](../../models/components/logsrequest.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |