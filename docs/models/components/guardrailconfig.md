# GuardrailConfig

## Example Usage

```typescript
import { GuardrailConfig } from "@mistralai/mistralai-azure/models/components";

let value: GuardrailConfig = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `blockOnError`                                                                       | *boolean*                                                                            | :heavy_minus_sign:                                                                   | If true, return HTTP 403 and block request in the event of a server-side error       |
| `moderationLlmV1`                                                                    | [components.ModerationLlmv1Config](../../models/components/moderationllmv1config.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `moderationLlmV2`                                                                    | [components.ModerationLlmv2Config](../../models/components/moderationllmv2config.md) | :heavy_minus_sign:                                                                   | N/A                                                                                  |