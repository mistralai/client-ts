# AggregationMeta

## Example Usage

```typescript
import { AggregationMeta } from "@mistralai/mistralai/models/components";

let value: AggregationMeta = {
  fromTimestamp: new Date("2024-12-16T05:57:13.124Z"),
  toTimestamp: new Date("2026-06-24T04:29:04.061Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `fromTimestamp`                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toTimestamp`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `granularitySeconds`                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |