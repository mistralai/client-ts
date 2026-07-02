# SearchLatestSpanEvaluationsV1ObservabilitySpansEvaluationsSearchLatestPostRequest

## Example Usage

```typescript
import {
  SearchLatestSpanEvaluationsV1ObservabilitySpansEvaluationsSearchLatestPostRequest,
} from "@mistralai/mistralai/models/operations";

let value:
  SearchLatestSpanEvaluationsV1ObservabilitySpansEvaluationsSearchLatestPostRequest =
    {
      spanEvaluationsRequest: {},
    };
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `spanEvaluationsRequest`                                                                      | [components.SpanEvaluationsRequest](../../models/components/spanevaluationsrequest.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |