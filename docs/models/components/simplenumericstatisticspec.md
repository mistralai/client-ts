# SimpleNumericStatisticSpec

A scalar numeric reduction with no parameters (``avg``/``sum``/``min``/``max``/``std``/``count``).

## Example Usage

```typescript
import { SimpleNumericStatisticSpec } from "@mistralai/mistralai/models/components";

let value: SimpleNumericStatisticSpec = {
  kind: "sum",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                 | [components.SimpleNumericStatisticSpecKind](../../models/components/simplenumericstatisticspeckind.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `goal`                                                                                                 | [components.GoalSpec](../../models/components/goalspec.md)                                             | :heavy_minus_sign:                                                                                     | N/A                                                                                                    |