# SSETypes

Server side events sent when streaming a conversation response.

## Example Usage

```typescript
import { SSETypes } from "@mistralai/mistralai/models/components";

let value: SSETypes = "message.output.delta";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"conversation.response.started" | "conversation.response.done" | "conversation.response.error" | "message.output.delta" | "tool.execution.started" | "tool.execution.delta" | "tool.execution.done" | "agent.handoff.started" | "agent.handoff.done" | "function.call.delta" | Unrecognized<string>
```