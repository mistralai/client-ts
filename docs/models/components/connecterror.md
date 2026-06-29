# ConnectError

Error response.

## Example Usage

```typescript
import { ConnectError } from "@mistralai/mistralai/models/components";

let value: ConnectError = {
  code: "not_found",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `code`                                                           | [components.Code](../../models/components/code.md)               | :heavy_minus_sign:                                               | Machine-readable error code.                                     | not_found                                                        |
| `message`                                                        | *string*                                                         | :heavy_minus_sign:                                               | Human-readable error message.                                    |                                                                  |
| `detail`                                                         | [components.ProtobufAny](../../models/components/protobufany.md) | :heavy_minus_sign:                                               | Additional structured error detail.                              |                                                                  |
| `additionalProperties`                                           | Record<string, *any*>                                            | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |