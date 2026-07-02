# SkillDefinition

Versioned skill content.

## Example Usage

```typescript
import { SkillDefinition } from "@mistralai/mistralai/models/components";

let value: SkillDefinition = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `description`                                  | *string*                                       | :heavy_minus_sign:                             | Model-facing trigger and usage description.    |
| `body`                                         | *string*                                       | :heavy_minus_sign:                             | Skill body content.                            |
| `assets`                                       | Record<string, *components.SkillAssetContent*> | :heavy_minus_sign:                             | Additional files available to the skill.       |