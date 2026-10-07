# ClassificationStatisticSpec

A classification metric (``precision``/``recall``/``f1``) over ``(expected, predicted)`` pairs.

The predicted label is the score ``value``; the expected label is read from the score ``metadata``
under ``expected_key`` (default ``"expected"``). Provide **exactly one** of ``positive_label`` (a
binary metric scored against that one class) or ``average`` (a multi-class averaging scheme).

``labels`` pins the class universe so filtered views keep a stable, comparable denominator.

## Example Usage

```typescript
import { ClassificationStatisticSpec } from "@mistralai/mistralai/models/components";

let value: ClassificationStatisticSpec = {
  kind: "precision",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                   | [components.ClassificationStatisticSpecKind](../../models/components/classificationstatisticspeckind.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `positiveLabel`                                                                                          | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `average`                                                                                                | [components.Average](../../models/components/average.md)                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `expectedKey`                                                                                            | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `labels`                                                                                                 | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `goal`                                                                                                   | [components.GoalSpec](../../models/components/goalspec.md)                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |