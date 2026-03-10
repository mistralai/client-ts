# ConversationSource

## Example Usage

```typescript
import { ConversationSource } from "@mistralai/mistralai/models/components";

let value: ConversationSource = "DIRECT_INPUT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"EXPLORER" | "UPLOADED_FILE" | "DIRECT_INPUT" | "PLAYGROUND" | Unrecognized<string>
```