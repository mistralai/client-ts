# GlobalHeaderValue

Value of a connector-wide header. ``value`` is plaintext in memory so create
round-trips and encryption-at-rest keep the real value; secrets are redacted only
on JSON serialization (API responses).

## Example Usage

```typescript
import { GlobalHeaderValue } from "@mistralai/mistralai/models/components";

let value: GlobalHeaderValue = {
  value: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `isSecret`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |