# InternalMetadata

Typed structure for internal metadata.

## Example Usage

```typescript
import { InternalMetadata } from "@mistralai/mistralai/models/components";

let value: InternalMetadata = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `agentId`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `agentVersion`                                                     | *components.InternalMetadataAgentVersion*                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `mirrorConfig`                                                     | [components.MirrorConfig](../../models/components/mirrorconfig.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `scienceConfig`                                                    | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |
| `additionalProperties`                                             | Record<string, *any*>                                              | :heavy_minus_sign:                                                 | N/A                                                                |