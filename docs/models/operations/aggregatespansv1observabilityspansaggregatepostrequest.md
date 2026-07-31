# AggregateSpansV1ObservabilitySpansAggregatePostRequest

## Example Usage

```typescript
import { AggregateSpansV1ObservabilitySpansAggregatePostRequest } from "@mistralai/mistralai/models/operations";

let value: AggregateSpansV1ObservabilitySpansAggregatePostRequest = {
  aggregationRequest: {
    metric: {
      measure: "<value>",
      aggregation: "p90",
    },
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `aggregationRequest`                                                                          | [components.AggregationRequest](../../models/components/aggregationrequest.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |