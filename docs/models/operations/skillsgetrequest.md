# SkillsGetRequest

## Example Usage

```typescript
import { SkillsGetRequest } from "@mistralai/mistralai/models/operations";

let value: SkillsGetRequest = {
  skillId: "<id>",
  version: 1,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `skillId`          | *string*           | :heavy_check_mark: | N/A                |                    |
| `version`          | *number*           | :heavy_minus_sign: | N/A                | 1                  |
| `alias`            | *string*           | :heavy_minus_sign: | N/A                |                    |
| `fields`           | *string*[]         | :heavy_minus_sign: | N/A                |                    |