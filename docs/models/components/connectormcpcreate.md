# ConnectorMCPCreate

## Example Usage

```typescript
import { ConnectorMCPCreate } from "@mistralai/mistralai/models/components";

let value: ConnectorMCPCreate = {
  name: "<value>",
  description: "filthy substantial exotic before duh",
  server: "https://medium-gripper.biz",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `name`                                                                                              | *string*                                                                                            | :heavy_check_mark:                                                                                  | The name of the connector. Should be 64 char length maximum, alphanumeric, only underscores/dashes. |
| `description`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | The description of the connector.                                                                   |
| `iconUrl`                                                                                           | *string*                                                                                            | :heavy_minus_sign:                                                                                  | The optional url of the icon you want to associate to the connector.                                |
| `visibility`                                                                                        | [components.ResourceVisibility](../../models/components/resourcevisibility.md)                      | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `server`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | The url of the MCP server.                                                                          |
| `headers`                                                                                           | Record<string, *any*>                                                                               | :heavy_minus_sign:                                                                                  | Optional organization-level headers to be sent with the request to the mcp server.                  |
| `authData`                                                                                          | [components.AuthData](../../models/components/authdata.md)                                          | :heavy_minus_sign:                                                                                  | Optional additional authentication data for the connector.                                          |
| `systemPrompt`                                                                                      | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Optional system prompt for the connector.                                                           |