# PromptVersion

## Example Usage

```typescript
import { PromptVersion } from "@mistralai/mistralai/models/components";

let value: PromptVersion = {
  version: 1,
  createdAt: new Date("1s"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `version`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `definition`                                                                                  | [components.PromptDefinition](../../models/components/promptdefinition.md)                    | :heavy_minus_sign:                                                                            | Versioned prompt content.                                                                     |                                                                                               |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Notes for this version.                                                                       |                                                                                               |
| `aliases`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Aliases pointing to this version.                                                             |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | RFC 3339 timestamp.                                                                           | 1s                                                                                            |