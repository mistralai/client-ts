# ConnectorToolResultMetadata

MCP-specific result metadata (isError, structuredContent, _meta).

## Example Usage

```typescript
import { ConnectorToolResultMetadata } from "@mistralai/mistralai/models/components";

let value: ConnectorToolResultMetadata = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `isError`              | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `structuredContent`    | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `meta`                 | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `additionalProperties` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |