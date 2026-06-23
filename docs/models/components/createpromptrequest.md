# CreatePromptRequest

## Example Usage

```typescript
import { CreatePromptRequest } from "@mistralai/mistralai/models/components";

let value: CreatePromptRequest = {
  name: "<value>",
  definition: {
    content: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | Stable object name.                                                                |
| `definition`                                                                       | [components.PromptDefinition](../../models/components/promptdefinition.md)         | :heavy_check_mark:                                                                 | Versioned prompt content.                                                          |
| `title`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Display title.                                                                     |
| `description`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | Display description.                                                               |
| `notes`                                                                            | *string*                                                                           | :heavy_minus_sign:                                                                 | Notes for this version.                                                            |
| `sharingScope`                                                                     | [components.RegistrySharingScope](../../models/components/registrysharingscope.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `aliases`                                                                          | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Aliases pointing to this version.                                                  |