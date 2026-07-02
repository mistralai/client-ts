# ListSkillVersionsResponse

## Example Usage

```typescript
import { ListSkillVersionsResponse } from "@mistralai/mistralai/models/components";

let value: ListSkillVersionsResponse = {
  data: [
    {
      version: 1,
      createdAt: new Date("1s"),
    },
  ],
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [components.SkillVersion](../../models/components/skillversion.md)[] | :heavy_minus_sign:                                                   | N/A                                                                  |