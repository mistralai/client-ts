# SkillsUpdateVersionMetadataRequest

## Example Usage

```typescript
import { SkillsUpdateVersionMetadataRequest } from "@mistralai/mistralai/models/operations";

let value: SkillsUpdateVersionMetadataRequest = {
  skillId: "<id>",
  version: 651173,
  requestBody: {
    aliases: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `skillId`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `version`                                                                                    | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestBody`                                                                                | [operations.UpdateSkillVersionRequest](../../models/operations/updateskillversionrequest.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |