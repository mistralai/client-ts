# ListSkillsResponse

## Example Usage

```typescript
import { ListSkillsResponse } from "@mistralai/mistralai/models/components";

let value: ListSkillsResponse = {
  data: [
    {
      createdAt: new Date("1s"),
      updatedAt: new Date("1s"),
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `data`                                                 | [components.Skill](../../models/components/skill.md)[] | :heavy_minus_sign:                                     | N/A                                                    |
| `nextPageToken`                                        | *string*                                               | :heavy_minus_sign:                                     | N/A                                                    |