# JSONPatchAppendValue

The value to use for the operation. A string to append to the existing value, or an EncryptedPatchValue wrapper when encryption is applied.


## Supported Types

### `string`

```typescript
const value: string = "<value>";
```

### `components.EncryptedPatchValue`

```typescript
const value: components.EncryptedPatchValue = {
  type: "__encrypted__",
  value: "<value>",
};
```

