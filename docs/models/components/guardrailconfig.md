# GuardrailConfig

## Example Usage

```typescript
import { GuardrailConfig } from "@mistralai/mistralai/models/components";

let value: GuardrailConfig = {
  moderationLlmV1: {},
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `blockOnError`                                                                       | *boolean*                                                                            | :heavy_minus_sign:                                                                   | If true, return HTTP 403 and block request in the event of a server-side error       |
| `moderationLlmV1`                                                                    | [components.ModerationLlmv1Config](../../models/components/moderationllmv1config.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |