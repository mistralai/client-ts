# ModerationResponse

## Example Usage

```typescript
import { ModerationResponse } from "@mistralai/mistralai/models/components";

let value: ModerationResponse = {
  id: "mod-e5cc70bb28c444948073e77776eb30ef",
  model: "Aventador",
  results: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          | mod-e5cc70bb28c444948073e77776eb30ef                                         |
| `model`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `results`                                                                    | [components.ModerationObject](../../models/components/moderationobject.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |