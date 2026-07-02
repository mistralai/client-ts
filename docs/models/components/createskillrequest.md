# CreateSkillRequest

## Example Usage

```typescript
import { CreateSkillRequest } from "@mistralai/mistralai/models/components";

let value: CreateSkillRequest = {
  name: "<value>",
  definition: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | Stable object name.                                                                |
| `definition`                                                                       | [components.SkillDefinition](../../models/components/skilldefinition.md)           | :heavy_check_mark:                                                                 | Versioned skill content.                                                           |
| `notes`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Notes for this version.                                                            |
| `sharingScope`                                                                     | [components.RegistrySharingScope](../../models/components/registrysharingscope.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `aliases`                                                                          | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Aliases pointing to this version.                                                  |