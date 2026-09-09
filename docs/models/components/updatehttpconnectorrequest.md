# UpdateHTTPConnectorRequest

## Example Usage

```typescript
import { UpdateHTTPConnectorRequest } from "@mistralai/mistralai/models/components";

let value: UpdateHTTPConnectorRequest = {
  protocol: "http",
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
| `authMethods`                                                        | *components.UpdateHTTPConnectorRequestAuthMethod2*[]                 | :heavy_minus_sign:                                                   | Authentication methods supported by the connector.                   |
| `protocol`                                                           | *"http"*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |