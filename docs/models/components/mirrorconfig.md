# MirrorConfig

Configuration for mirroring behavior.

## Example Usage

```typescript
import { MirrorConfig } from "@mistralai/mistralai/models/components";

let value: MirrorConfig = {
  mirrorSource: {
    app: "<value>",
    rootModelName: "<value>",
    mirrorModelName: "<value>",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `mirrorSource`                                                     | [components.MirrorSource](../../models/components/mirrorsource.md) | :heavy_check_mark:                                                 | Source information for mirrored requests.                          |