# NetworkEncodedInput

## Example Usage

```typescript
import { NetworkEncodedInput } from "@mistralai/mistralai/models/components";

let value: NetworkEncodedInput = {
  b64payload: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `b64payload`                                                                           | *string*                                                                               | :heavy_check_mark:                                                                     | The encoded payload                                                                    |
| `encodingOptions`                                                                      | [components.EncodedPayloadOptions](../../models/components/encodedpayloadoptions.md)[] | :heavy_minus_sign:                                                                     | The encoding of the payload                                                            |
| `empty`                                                                                | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Whether the payload is empty                                                           |