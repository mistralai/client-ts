# FunctionCall

## Example Usage

```typescript
import { FunctionCall } from "@mistralai/mistralai-gcp/models/components";

let value: FunctionCall = {
    name: "<value>",
    arguments: {
        key: "<value>",
    },
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `name`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `arguments`            | *components.Arguments* | :heavy_check_mark:     | N/A                    |