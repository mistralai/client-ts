# LogicalExpression

## Example Usage

```typescript
import { LogicalExpression } from "@mistralai/mistralai/models/components";

let value: LogicalExpression = {
  type: "and",
  expressions: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [components.LogicalExpressionType](../../models/components/logicalexpressiontype.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `expressions`                                                                        | *components.Expression*[]                                                            | :heavy_check_mark:                                                                   | N/A                                                                                  |