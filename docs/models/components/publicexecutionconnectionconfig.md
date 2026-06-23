# PublicExecutionConnectionConfig

Connection config exposed in the public, unauthenticated /connectors/mistral response.

Unlike ConnectionConfig, this has no `headers` field and forbids extra fields, so
connector credentials can never be serialized into this cacheable response.

## Example Usage

```typescript
import { PublicExecutionConnectionConfig } from "@mistralai/mistralai/models/components";

let value: PublicExecutionConnectionConfig = {
  type: "mcp",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [components.ConnectionConfigType](../../models/components/connectionconfigtype.md)             | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `server`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `toolConfiguration`                                                                            | [components.ToolExecutionConfiguration](../../models/components/toolexecutionconfiguration.md) | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `hostedInternally`                                                                             | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |