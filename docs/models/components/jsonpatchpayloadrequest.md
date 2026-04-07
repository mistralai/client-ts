# JSONPatchPayloadRequest

A payload containing a list of JSON Patch operations.

Used for streaming incremental updates to workflow state.

## Example Usage

```typescript
import { JSONPatchPayloadRequest } from "@mistralai/mistralai/models/components";

let value: JSONPatchPayloadRequest = {
  type: "json_patch",
  value: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *"json_patch"*                                         | :heavy_check_mark:                                     | Discriminator indicating this is a JSON Patch payload. |
| `value`                                                | *components.JSONPatchPayloadRequestValue*[]            | :heavy_check_mark:                                     | The list of JSON Patch operations to apply in order.   |