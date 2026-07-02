# DeltaMessage

## Example Usage

```typescript
import { DeltaMessage } from "@mistralai/mistralai/models/components";

let value: DeltaMessage = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `role`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `content`                                                                                        | *components.DeltaMessageContent*                                                                 | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `toolCalls`                                                                                      | [components.ToolCall](../../models/components/toolcall.md)[]                                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `toolCallId`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `index`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | If the completion returns multiple messages, this is to specify which message this delta is for. |
| `metadata`                                                                                       | Record<string, *any*>                                                                            | :heavy_minus_sign:                                                                               | N/A                                                                                              |