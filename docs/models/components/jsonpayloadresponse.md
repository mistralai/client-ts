# JSONPayloadResponse

A payload containing arbitrary JSON data.

Used for complete state snapshots or final results.

## Example Usage

```typescript
import { JSONPayloadResponse } from "@mistralai/mistralai/models/components";

let value: JSONPayloadResponse = {
  value: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `type`                                               | *"json"*                                             | :heavy_minus_sign:                                   | Discriminator indicating this is a raw JSON payload. |
| `value`                                              | *any*                                                | :heavy_check_mark:                                   | The JSON-serializable payload value.                 |