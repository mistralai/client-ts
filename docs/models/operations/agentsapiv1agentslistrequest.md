# AgentsApiV1AgentsListRequest

## Example Usage

```typescript
import { AgentsApiV1AgentsListRequest } from "@mistralai/mistralai/models/operations";

let value: AgentsApiV1AgentsListRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `page`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | Page number (0-indexed)                                                |
| `pageSize`                                                             | *number*                                                               | :heavy_minus_sign:                                                     | Number of agents per page                                              |
| `deploymentChat`                                                       | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `sources`                                                              | [components.RequestSource](../../models/components/requestsource.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Filter by agent name                                                   |
| `search`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Search agents by name or ID                                            |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `metadata`                                                             | Record<string, *any*>                                                  | :heavy_minus_sign:                                                     | N/A                                                                    |