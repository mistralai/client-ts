# BatchExecutionResult

## Example Usage

```typescript
import { BatchExecutionResult } from "@mistralai/mistralai/models/components";

let value: BatchExecutionResult = {
  status: "<value>",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `status`                                  | *string*                                  | :heavy_check_mark:                        | Status of the operation (success/failure) |
| `error`                                   | *string*                                  | :heavy_minus_sign:                        | Error message if operation failed         |