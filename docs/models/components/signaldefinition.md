# SignalDefinition

## Example Usage

```typescript
import { SignalDefinition } from "@mistralai/mistralai/models/components";

let value: SignalDefinition = {
  name: "<value>",
  inputSchema: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `name`                                  | *string*                                | :heavy_check_mark:                      | Name of the signal                      |
| `description`                           | *string*                                | :heavy_minus_sign:                      | Description of the signal               |
| `inputSchema`                           | Record<string, *any*>                   | :heavy_check_mark:                      | Input JSON schema of the signal's model |