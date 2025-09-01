# ThinkChunk

## Example Usage

```typescript
import { ThinkChunk } from "@mistralai/mistralai/models/components";

let value: ThinkChunk = {
  thinking: [],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `thinking`                                                                      | *components.Thinking*[]                                                         | :heavy_check_mark:                                                              | N/A                                                                             |
| `closed`                                                                        | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether the thinking chunk is closed or not. Currently only used for prefixing. |
| `type`                                                                          | [components.ThinkChunkType](../../models/components/thinkchunktype.md)          | :heavy_minus_sign:                                                              | N/A                                                                             |