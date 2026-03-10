# CreateCampaignRequest

## Example Usage

```typescript
import { CreateCampaignRequest } from "@mistralai/mistralai/models/components";

let value: CreateCampaignRequest = {
  searchParams: {
    filters: {},
  },
  judgeId: "d606cfbb-a2e2-4aa8-b780-a226dc17f675",
  name: "<value>",
  description: "ew serialize yippee yippee er gee coin gadzooks whimsical",
  maxNbEvents: 577729,
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `searchParams`                                                        | [components.FilterPayload](../../models/components/filter-payload.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `judgeId`                                                             | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `description`                                                         | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `maxNbEvents`                                                         | *number*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |