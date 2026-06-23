# MCPServerRemoteHeader

Header definition for a remote transport (SEP-2127).

## Example Usage

```typescript
import { MCPServerRemoteHeader } from "@mistralai/mistralai/models/components";

let value: MCPServerRemoteHeader = {
  name: "<value>",
  description: "limping truly farmer order meanwhile",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `name`                                   | *string*                                 | :heavy_check_mark:                       | Header name                              |
| `description`                            | *string*                                 | :heavy_check_mark:                       | Human-readable description of the header |
| `isRequired`                             | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `isSecret`                               | *boolean*                                | :heavy_minus_sign:                       | N/A                                      |
| `default`                                | *string*                                 | :heavy_minus_sign:                       | N/A                                      |
| `choices`                                | *string*[]                               | :heavy_minus_sign:                       | N/A                                      |