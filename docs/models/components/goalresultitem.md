# GoalResultItem

## Example Usage

```typescript
import { GoalResultItem } from "@mistralai/mistralai/models/components";

let value: GoalResultItem = {
  metric: "<value>",
  operator: "<value>",
  actual: 6048.9,
  passed: true,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `metric`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `operator`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `target`                                                                                 | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `targetMin`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `targetMax`                                                                              | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `actual`                                                                                 | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `passed`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `direction`                                                                              | [components.GoalResultItemDirection](../../models/components/goalresultitemdirection.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |