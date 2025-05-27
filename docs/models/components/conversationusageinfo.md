# ConversationUsageInfo

## Example Usage

```typescript
import { ConversationUsageInfo } from "@mistralai/mistralai/models/components";

let value: ConversationUsageInfo = {};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `promptTokens`           | *number*                 | :heavy_minus_sign:       | N/A                      |
| `completionTokens`       | *number*                 | :heavy_minus_sign:       | N/A                      |
| `totalTokens`            | *number*                 | :heavy_minus_sign:       | N/A                      |
| `connectorTokens`        | *number*                 | :heavy_minus_sign:       | N/A                      |
| `connectors`             | Record<string, *number*> | :heavy_minus_sign:       | N/A                      |