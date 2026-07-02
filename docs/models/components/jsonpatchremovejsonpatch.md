# JSONPatchRemoveJSONPatch

## Example Usage

```typescript
import { JSONPatchRemoveJSONPatch } from "@mistralai/mistralai/models/components";

let value: JSONPatchRemoveJSONPatch = {
  path: "/usr/ports",
  value: "<value>",
  op: "remove",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                                                                                          | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations. |
| `value`                                                                                                                                                                         | *any*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                              | The value to use for the operation                                                                                                                                              |
| `op`                                                                                                                                                                            | *"remove"*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                              | Remove operation                                                                                                                                                                |