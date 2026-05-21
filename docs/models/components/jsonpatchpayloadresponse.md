# JSONPatchPayloadResponse

A payload containing a list of JSON Patch operations.

Used for streaming incremental updates to workflow state.
When encrypted, the value field contains base64-encoded encrypted data
and encoding_options indicates the type of encryption applied.

## Example Usage

```typescript
import { JSONPatchPayloadResponse } from "@mistralai/mistralai/models/components";

let value: JSONPatchPayloadResponse = {
  type: "json_patch",
  value: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | *"json_patch"*                                                                         | :heavy_check_mark:                                                                     | Discriminator indicating this is a JSON Patch payload.                                 |
| `value`                                                                                | *components.JSONPatchPayloadValueResponse*                                             | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `encodingOptions`                                                                      | [components.EncodedPayloadOptions](../../models/components/encodedpayloadoptions.md)[] | :heavy_minus_sign:                                                                     | Encoding options applied to the payload.                                               |