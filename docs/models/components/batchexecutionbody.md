# BatchExecutionBody

## Example Usage

```typescript
import { BatchExecutionBody } from "@mistralai/mistralai/models/components";

let value: BatchExecutionBody = {
  executionIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `executionIds`                   | *string*[]                       | :heavy_check_mark:               | List of execution IDs to process |