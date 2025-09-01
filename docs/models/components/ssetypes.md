# SSETypes

Server side events sent when streaming a conversation response.

## Example Usage

```typescript
import { SSETypes } from "@mistralai/mistralai/models/components";

let value: SSETypes = "message.output.delta";
```

## Values

```typescript
"conversation.response.started" | "conversation.response.done" | "conversation.response.error" | "message.output.delta" | "tool.execution.started" | "tool.execution.delta" | "tool.execution.done" | "agent.handoff.started" | "agent.handoff.done" | "function.call.delta"
```