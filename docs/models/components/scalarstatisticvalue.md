# ScalarStatisticValue

A single scalar computed run-level statistic: its canonical id and numeric value.

``value`` is ``None`` when the statistic is not evaluable (e.g. a ``sum`` or percentile over an
empty numeric sample). A declared ``count`` is always evaluable and is ``0`` on an empty sample.

The ``type`` discriminator lets future result shapes (e.g. a categorical ``categories`` or a
``distribution``) join a union without overloading this model; consumers dispatch on ``type``.

## Example Usage

```typescript
import { ScalarStatisticValue } from "@mistralai/mistralai/models/components";

let value: ScalarStatisticValue = {
  id: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"scalar"*         | :heavy_minus_sign: | N/A                |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *number*           | :heavy_minus_sign: | N/A                |