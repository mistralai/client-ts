# GetSearchIndexDetailResponseIndex

## Example Usage

```typescript
import { GetSearchIndexDetailResponseIndex } from "@mistralai/mistralai/models/components";

let value: GetSearchIndexDetailResponseIndex = {
  name: "<value>",
  creatorId: "<id>",
  documentCount: 215628,
  status: "offline",
  createdAt: new Date("2024-08-20T11:57:23.546Z"),
  modifiedAt: new Date("2024-02-26T10:46:03.346Z"),
  vespaVersion: "<value>",
  summary: "<value>",
  schemas: [],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `creatorId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `documentCount`                                                                                                            | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `status`                                                                                                                   | [components.GetSearchIndexDetailResponseIndexStatus](../../models/components/getsearchindexdetailresponseindexstatus.md)   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `modifiedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `vespaVersion`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `summary`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `schemas`                                                                                                                  | [components.GetSearchIndexDetailResponseSchemaModel](../../models/components/getsearchindexdetailresponseschemamodel.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |