# TelemetrySpanReference

Immutable provenance used to identify a telemetry span.

## Example Usage

```typescript
import { TelemetrySpanReference } from "@mistralai/mistralai/models/components";

let value: TelemetrySpanReference = {
  traceId: "<id>",
  spanId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `traceId`          | *string*           | :heavy_check_mark: | N/A                |
| `spanId`           | *string*           | :heavy_check_mark: | N/A                |