# GoalResult

## Example Usage

```typescript
import { GoalResult } from "@mistralai/mistralai/models/components";

let value: GoalResult = {
  passed: false,
  results: [
    {
      metric: "<value>",
      operator: "<value>",
      actual: 3774.97,
      passed: true,
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `passed`                                                                 | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      |
| `results`                                                                | [components.GoalResultItem](../../models/components/goalresultitem.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |