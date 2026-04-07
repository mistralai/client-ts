# Failure

Represents an error or exception that occurred during execution.

## Example Usage

```typescript
import { Failure } from "@mistralai/mistralai/models/components";

let value: Failure = {
  message: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `message`                                    | *string*                                     | :heavy_check_mark:                           | A human-readable description of the failure. |