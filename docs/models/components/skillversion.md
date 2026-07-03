# SkillVersion

## Example Usage

```typescript
import { SkillVersion } from "@mistralai/mistralai/models/components";

let value: SkillVersion = {
  version: 1,
  createdAt: new Date("1s"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `version`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 1                                                                                             |
| `definition`                                                                                  | [components.SkillDefinition](../../models/components/skilldefinition.md)                      | :heavy_minus_sign:                                                                            | Versioned skill content.                                                                      |                                                                                               |
| `notes`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Notes for this version.                                                                       |                                                                                               |
| `aliases`                                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Aliases pointing to this version.                                                             |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | RFC 3339 timestamp.                                                                           | **Example 1:** 1s<br/>**Example 2:** 1.000340012s                                             |