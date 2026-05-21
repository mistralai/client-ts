# EncryptedPatchValue

Wrapper for encrypted patch values in selective json_patch encryption.

When partial encryption mode is enabled and a patch targets an EncryptedStrField,
the patch value is encrypted and wrapped in this structure.

The type field acts as a discriminator to distinguish this from user data.

## Example Usage

```typescript
import { EncryptedPatchValue } from "@mistralai/mistralai/models/components";

let value: EncryptedPatchValue = {
  type: "__encrypted__",
  value: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"__encrypted__"*  | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |