# UpdateConnectorRequest

## Example Usage

```typescript
import { UpdateConnectorRequest } from "@mistralai/mistralai/models/components";

let value: UpdateConnectorRequest = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The name of the connector.                                           |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | The description of the connector.                                    |
| `iconUrl`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | The optional url of the icon you want to associate to the connector. |
| `systemPrompt`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | Optional system prompt for the connector.                            |
| `connectionConfig`                                                   | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | Optional new connection config.                                      |
| `connectionSecrets`                                                  | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | Optional new connection secrets                                      |
| `server`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | New server url for your mcp connector.                               |
| `headers`                                                            | Record<string, *any*>                                                | :heavy_minus_sign:                                                   | New headers for your mcp connector.                                  |
| `authData`                                                           | [components.AuthData](../../models/components/auth-data.md)          | :heavy_minus_sign:                                                   | New authentication data for your mcp connector.                      |