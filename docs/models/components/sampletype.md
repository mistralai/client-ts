# SampleType

## Example Usage

```typescript
import { SampleType } from "@mistralai/mistralai/models/components";

let value: SampleType = "pretrain";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pretrain" | "instruct" | "batch_request" | "batch_result" | "batch_error" | Unrecognized<string>
```