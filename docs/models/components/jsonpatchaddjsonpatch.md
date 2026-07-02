# JSONPatchAddJSONPatch

## Example Usage

```typescript
import { JSONPatchAddJSONPatch } from "@mistralai/mistralai/models/components";

let value: JSONPatchAddJSONPatch = {
  path: "/root",
  value: "<value>",
  op: "add",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                                                                                          | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations. |
| `value`                                                                                                                                                                         | *any*                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                              | The value to use for the operation                                                                                                                                              |
| `op`                                                                                                                                                                            | *"add"*                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                              | Add operation                                                                                                                                                                   |