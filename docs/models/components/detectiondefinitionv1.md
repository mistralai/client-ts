# DetectionDefinitionV1

## Example Usage

```typescript
import { DetectionDefinitionV1 } from "@mistralai/mistralai/models/components";

let value: DetectionDefinitionV1 = {
  targetAttributes: [],
  patterns: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `targetAttributes`                                                           | *string*[]                                                                   | :heavy_check_mark:                                                           | N/A                                                                          |
| `patterns`                                                                   | [components.DetectionPattern](../../models/components/detectionpattern.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |