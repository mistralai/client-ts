# IngestionPipelineConfiguration

## Example Usage

```typescript
import { IngestionPipelineConfiguration } from "@mistralai/mistralai/models/components";

let value: IngestionPipelineConfiguration = {
  id: "6fa0f879-5da0-4b46-8396-8de4465b223c",
  authorId: "<id>",
  name: "<value>",
  createdAt: new Date("2025-11-13T09:07:00.021Z"),
  modifiedAt: new Date("2025-03-24T22:20:58.593Z"),
  lastRunTime: new Date("2026-09-01T02:56:28.946Z"),
  lastRunChunksCount: 633906,
  totalChunksCount: 933405,
  pipelineComposition: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `authorId`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastRunTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastRunChunksCount`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `totalChunksCount`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `pipelineComposition`                                                                         | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |