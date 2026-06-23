# ListVoicesV1AudioVoicesGetRequest

## Example Usage

```typescript
import { ListVoicesV1AudioVoicesGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListVoicesV1AudioVoicesGetRequest = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `limit`                                            | *number*                                           | :heavy_minus_sign:                                 | Maximum number of voices to return                 |
| `offset`                                           | *number*                                           | :heavy_minus_sign:                                 | Offset for pagination                              |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_minus_sign:                                 | Filter the voices between customs and presets      |