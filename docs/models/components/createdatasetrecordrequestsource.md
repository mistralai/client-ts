# CreateDatasetRecordRequestSource

Caller-declared channel that initiated record creation. This value does not certify that the payload is an unmodified copy of its source.

## Example Usage

```typescript
import { CreateDatasetRecordRequestSource } from "@mistralai/mistralai/models/components";

let value: CreateDatasetRecordRequestSource = "DIRECT_INPUT";
```

## Values

```typescript
"DIRECT_INPUT" | "TELEMETRY_SPAN"
```