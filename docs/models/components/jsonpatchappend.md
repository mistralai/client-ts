# JSONPatchAppend

## Example Usage

```typescript
import { JSONPatchAppend } from "@mistralai/mistralai/models/components";

let value: JSONPatchAppend = {
  path: "/srv",
  value: "<value>",
  op: "append",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`                                                                                                                                                                          | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | A JSON Pointer (RFC 6901) identifying the target location within the document. Can be a string path (e.g., '/foo/bar'), '/', '', or an empty list [] for root-level operations. |
| `value`                                                                                                                                                                         | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | The value to use for the operation. A string to append to the existing value                                                                                                    |
| `op`                                                                                                                                                                            | *"append"*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                              | 'append' is an extension for efficient string concatenation in streaming scenarios.                                                                                             |