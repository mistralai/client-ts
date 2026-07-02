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
| `type`                                                                          | *"thinking"*                                                                    | :heavy_minus_sign:                                                              | N/A                                                                             |
| `thinking`                                                                      | *components.Thinking*[]                                                         | :heavy_check_mark:                                                              | N/A                                                                             |
| `signature`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Signature to replay some reasoning blocks across turns.                         |
| `closed`                                                                        | *boolean*                                                                       | :heavy_minus_sign:                                                              | Whether the thinking chunk is closed or not. Currently only used for prefixing. |