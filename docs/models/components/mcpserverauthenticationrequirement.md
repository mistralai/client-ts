# MCPServerAuthenticationRequirement

Authentication requirements for a remote transport (SEP-2127).

## Example Usage

```typescript
import { MCPServerAuthenticationRequirement } from "@mistralai/mistralai/models/components";

let value: MCPServerAuthenticationRequirement = {
  required: true,
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `required`                                    | *boolean*                                     | :heavy_check_mark:                            | Whether authentication is mandatory           |
| `schemes`                                     | *string*[]                                    | :heavy_minus_sign:                            | Supported schemes (e.g. ['bearer', 'oauth2']) |