# ResponsesErrorEvent

## Example Usage

```typescript
import { ResponsesErrorEvent } from "@mistralai/mistralai/models/components";

let value: ResponsesErrorEvent = {
  message: "<value>",
  sequenceNumber: 998862,
  type: "error",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `code`                 | *string*               | :heavy_minus_sign:     | N/A                    |
| `message`              | *string*               | :heavy_check_mark:     | N/A                    |
| `param`                | *string*               | :heavy_minus_sign:     | N/A                    |
| `sequenceNumber`       | *number*               | :heavy_check_mark:     | N/A                    |
| `type`                 | *"error"*              | :heavy_check_mark:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |