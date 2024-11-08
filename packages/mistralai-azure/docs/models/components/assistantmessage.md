# AssistantMessage

## Example Usage

```typescript
import { AssistantMessage } from "@mistralai/mistralai-azure/models/components";

let value: AssistantMessage = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `content`                                                                          | *components.AssistantMessageContent*                                               | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `toolCalls`                                                                        | [components.ToolCall](../../models/components/toolcall.md)[]                       | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `prefix`                                                                           | *boolean*                                                                          | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `role`                                                                             | [components.AssistantMessageRole](../../models/components/assistantmessagerole.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |