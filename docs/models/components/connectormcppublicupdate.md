# ConnectorMCPPublicUpdate

## Example Usage

```typescript
import { ConnectorMCPPublicUpdate } from "@mistralai/mistralai/models/components";

let value: ConnectorMCPPublicUpdate = {
  protocol: "mcp",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `title`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | Optional human-readable title for the connector.                     |
| `name`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | The name of the connector.                                           |
| `description`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | The description of the connector.                                    |
| `iconUrl`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | The optional url of the icon you want to associate to the connector. |
| `server`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | New connector server URL.                                            |
| `authMethods`                                                        | *components.ConnectorMCPPublicUpdateAuthMethod2*[]                   | :heavy_minus_sign:                                                   | Authentication methods supported by the connector.                   |
| `protocol`                                                           | *"mcp"*                                                              | :heavy_check_mark:                                                   | N/A                                                                  |
| `systemPrompt`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | Optional system prompt for the connector.                            |