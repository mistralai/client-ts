# ListTriggersV1TriggersGetRequest

## Example Usage

```typescript
import { ListTriggersV1TriggersGetRequest } from "@mistralai/mistralai/models/operations";

let value: ListTriggersV1TriggersGetRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `handler`                                                              | [components.TriggerHandler](../../models/components/triggerhandler.md) | :heavy_minus_sign:                                                     | Filter by handler type                                                 |
| `primitiveId`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | Filter by primitive ID (workflow, agent, or app)                       |
| `eventSourceId`                                                        | *string*                                                               | :heavy_minus_sign:                                                     | Filter by event source ID (webhook id)                                 |