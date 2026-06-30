# CreatePromptVersionRequest

## Example Usage

```typescript
import { CreatePromptVersionRequest } from "@mistralai/mistralai/models/operations";

let value: CreatePromptVersionRequest = {
  definition: {
    content: "<value>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `definition`                                                               | [components.PromptDefinition](../../models/components/promptdefinition.md) | :heavy_check_mark:                                                         | Versioned prompt content.                                                  |
| `notes`                                                                    | *string*                                                                   | :heavy_minus_sign:                                                         | Notes for this version.                                                    |
| `aliases`                                                                  | *string*[]                                                                 | :heavy_minus_sign:                                                         | Aliases pointing to this version.                                          |