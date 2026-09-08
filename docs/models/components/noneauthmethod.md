# NoneAuthMethod

## Example Usage

```typescript
import { NoneAuthMethod } from "@mistralai/mistralai/models/components";

let value: NoneAuthMethod = {
  methodType: "none",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `methodType`                                                                                           | *"none"*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `headers`                                                                                              | [components.ConnectorAuthenticationHeader](../../models/components/connectorauthenticationheader.md)[] | :heavy_minus_sign:                                                                                     | Headers whose values must be provided as credentials.                                                  |