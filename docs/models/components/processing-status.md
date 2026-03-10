# ProcessingStatus

## Example Usage

```typescript
import { ProcessingStatus } from "@mistralai/mistralai/models/components";

let value: ProcessingStatus = {
  documentId: "b6546be6-ef08-4fc4-a5f7-cccbe7663778",
  processStatus: "noop",
  processingStatus: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `documentId`                                                          | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `processStatus`                                                       | [components.ProcessStatus](../../models/components/process-status.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `processingStatus`                                                    | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |