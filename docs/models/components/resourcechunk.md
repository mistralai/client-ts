# ResourceChunk

## Example Usage

```typescript
import { ResourceChunk } from "@mistralai/mistralai/models/components";

let value: ResourceChunk = {
  type: "resource",
  uri: "https://rotten-mechanic.com/",
  content: {
    imageUrl: {
      url: "https://showy-arcade.com",
    },
  },
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `type`                            | *"resource"*                      | :heavy_check_mark:                | N/A                               |
| `uri`                             | *string*                          | :heavy_check_mark:                | N/A                               |
| `content`                         | *components.ResourceChunkContent* | :heavy_check_mark:                | N/A                               |