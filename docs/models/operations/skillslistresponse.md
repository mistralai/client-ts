# SkillsListResponse

## Example Usage

```typescript
import { SkillsListResponse } from "@mistralai/mistralai/models/operations";

let value: SkillsListResponse = {
  result: {
    data: [
      {
        version: 1,
        createdAt: new Date("1s"),
        updatedAt: new Date("1s"),
        latestVersion: 1,
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListSkillsResponse](../../models/components/listskillsresponse.md) | :heavy_check_mark:                                                             | N/A                                                                            |