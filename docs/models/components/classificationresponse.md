# ClassificationResponse

## Example Usage

```typescript
import { ClassificationResponse } from "@mistralai/mistralai/models/components";

let value: ClassificationResponse = {
  id: "mod-e5cc70bb28c444948073e77776eb30ef",
  model: "Charger",
  results: [
    {},
    {
      "key": {
        scores: {},
      },
    },
  ],
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              | mod-e5cc70bb28c444948073e77776eb30ef                                                                             |
| `model`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |
| `results`                                                                                                        | Record<string, [components.ClassificationTargetResult](../../models/components/classificationtargetresult.md)>[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |