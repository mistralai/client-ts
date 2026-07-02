# MCPServerRepository

Source repository information (SEP-2127).

## Example Usage

```typescript
import { MCPServerRepository } from "@mistralai/mistralai/models/components";

let value: MCPServerRepository = {
  url: "https://sophisticated-lid.net/",
  source: "<value>",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `url`                             | *string*                          | :heavy_check_mark:                | Repository URL                    |
| `source`                          | *string*                          | :heavy_check_mark:                | Source identifier (e.g. 'github') |
| `subfolder`                       | *string*                          | :heavy_minus_sign:                | N/A                               |