# SkillsGetVersionRequest

## Example Usage

```typescript
import { SkillsGetVersionRequest } from "@mistralai/mistralai/models/operations";

let value: SkillsGetVersionRequest = {
  skillId: "<id>",
  version: 1,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `skillId`          | *string*           | :heavy_check_mark: | N/A                |                    |
| `version`          | *number*           | :heavy_check_mark: | N/A                | 1                  |
| `fields`           | *string*[]         | :heavy_minus_sign: | N/A                |                    |