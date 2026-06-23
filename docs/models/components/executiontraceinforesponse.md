# ExecutionTraceInfoResponse

## Example Usage

```typescript
import { ExecutionTraceInfoResponse } from "@mistralai/mistralai/models/components";

let value: ExecutionTraceInfoResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `otelTraceId`                                                           | *string*                                                                | :heavy_minus_sign:                                                      | The ID of the trace, if available                                       |
| `hasTraceData`                                                          | *boolean*                                                               | :heavy_minus_sign:                                                      | Whether trace data is available in the trace backend for this execution |