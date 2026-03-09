# BatchRequest

## Example Usage

```typescript
import { BatchRequest } from "@mistralai/mistralai/models/components";

let value: BatchRequest = {
  body: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `customId`            | *string*              | :heavy_minus_sign:    | N/A                   |
| `body`                | Record<string, *any*> | :heavy_check_mark:    | N/A                   |