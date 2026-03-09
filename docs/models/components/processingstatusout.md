# ProcessingStatusOut

## Example Usage

```typescript
import { ProcessingStatusOut } from "@mistralai/mistralai/models/components";

let value: ProcessingStatusOut = {
  documentId: "085a09b6-80a9-4e24-aed9-b814a9dd2ab4",
  processStatus: "waiting_for_capacity",
  processingStatus: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `documentId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `processStatus`                                                      | [components.ProcessStatus](../../models/components/processstatus.md) | :heavy_check_mark:                                                   | N/A                                                                  |
| `processingStatus`                                                   | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |