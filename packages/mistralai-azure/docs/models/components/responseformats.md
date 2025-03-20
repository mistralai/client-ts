# ResponseFormats

An object specifying the format that the model must output. Setting to `{ "type": "json_object" }` enables JSON mode, which guarantees the message the model generates is in JSON. When using JSON mode you MUST also instruct the model to produce JSON yourself with a system or a user message.

## Example Usage

```typescript
import { ResponseFormats } from "@mistralai/mistralai-azure/models/components";

let value: ResponseFormats = "text";
```

## Values

```typescript
"text" | "json_object" | "json_schema"
```