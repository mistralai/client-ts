# CreateRealtimeSessionRequest

Payload used to create realtime client sessions.

## Example Usage

```typescript
import { CreateRealtimeSessionRequest } from "@mistralai/mistralai/models/components";

let value: CreateRealtimeSessionRequest = {
  purpose: "realtime",
  model: "ATS",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `purpose`          | *"realtime"*       | :heavy_check_mark: | N/A                |
| `model`            | *string*           | :heavy_check_mark: | N/A                |
| `ttlSeconds`       | *number*           | :heavy_minus_sign: | N/A                |