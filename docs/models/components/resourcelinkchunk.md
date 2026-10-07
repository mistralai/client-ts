# ResourceLinkChunk

## Example Usage

```typescript
import { ResourceLinkChunk } from "@mistralai/mistralai/models/components";

let value: ResourceLinkChunk = {
  type: "resource_link",
  uri: "https://runny-comparison.org",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `type`                                | *"resource_link"*                     | :heavy_check_mark:                    | N/A                                   |
| `uri`                                 | *string*                              | :heavy_check_mark:                    | N/A                                   |
| `metadata`                            | Record<string, *components.Metadata*> | :heavy_minus_sign:                    | N/A                                   |