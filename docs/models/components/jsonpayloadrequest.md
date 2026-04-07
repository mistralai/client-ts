# JSONPayloadRequest

A payload containing arbitrary JSON data.

Used for complete state snapshots or final results.

## Example Usage

```typescript
import { JSONPayloadRequest } from "@mistralai/mistralai/models/components";

let value: JSONPayloadRequest = {
  value: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"json"*                                             | :heavy_minus_sign:                                   | Discriminator indicating this is a raw JSON payload. |
| `value`                                              | *any*                                                | :heavy_check_mark:                                   | The JSON-serializable payload value.                 |