# CreateSkillVersionRequest

## Example Usage

```typescript
import { CreateSkillVersionRequest } from "@mistralai/mistralai/models/operations";

let value: CreateSkillVersionRequest = {
  definition: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `definition`                                                             | [components.SkillDefinition](../../models/components/skilldefinition.md) | :heavy_check_mark:                                                       | Versioned skill content.                                                 |
| `notes`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | Notes for this version.                                                  |
| `aliases`                                                                | *string*[]                                                               | :heavy_minus_sign:                                                       | Aliases pointing to this version.                                        |