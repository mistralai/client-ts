# ThinkChunk

## Example Usage

```typescript
import { ThinkChunk } from "@mistralai/mistralai-azure/models/components";

let value: ThinkChunk = {
  type: "thinking",
  thinking: [],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `type`                                                                          | *"thinking"*                                                                    | :heavy_check_mark:                                                              | N/A                                                                             |
| `thinking`                                                                      | *components.Thinking*[]                                                         | :heavy_check_mark:                                                              | N/A                                                                             |
| `closed`                                                                        | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether the thinking chunk is closed or not. Currently only used for prefixing. |