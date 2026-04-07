# JSONPatchPayloadResponse

A payload containing a list of JSON Patch operations.

Used for streaming incremental updates to workflow state.

## Example Usage

```typescript
import { JSONPatchPayloadResponse } from "@mistralai/mistralai/models/components";

let value: JSONPatchPayloadResponse = {
  type: "json_patch",
  value: [
    {
      path: "/opt/lib",
      value: "<value>",
      op: "replace",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *"json_patch"*                                         | :heavy_check_mark:                                     | Discriminator indicating this is a JSON Patch payload. |
| `value`                                                | *components.JSONPatchPayloadResponseValue*[]           | :heavy_check_mark:                                     | The list of JSON Patch operations to apply in order.   |