# JSONPatchAppendJSONPatch

## Example Usage

```typescript
import { JSONPatchAppendJSONPatch } from "@mistralai/mistralai/models/components";

let value: JSONPatchAppendJSONPatch = {
  path: "/sbin",
  value: "<value>",
  op: "append",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                                                                                          | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations. |
| `value`                                                                                                                                                                         | *components.JSONPatchAppendValue*                                                                                                                                               | :heavy_check_mark:                                                                                                                                                              | The value to use for the operation. A string to append to the existing value, or an EncryptedPatchValue wrapper when encryption is applied.                                     |
| `op`                                                                                                                                                                            | *"append"*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                              | 'append' is an extension for efficient string concatenation in streaming scenarios.                                                                                             |