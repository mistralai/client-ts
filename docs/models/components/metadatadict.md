# MetadataDict

Custom type for metadata with embedded validation.

## Example Usage

```typescript
import { MetadataDict } from "@mistralai/mistralai/models/components";

let value: MetadataDict = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `internal`                                                                 | [components.InternalMetadata](../../models/components/internalmetadata.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `additionalProperties`                                                     | Record<string, *any*>                                                      | :heavy_minus_sign:                                                         | N/A                                                                        |