# BearerAuthMethod

## Example Usage

```typescript
import { BearerAuthMethod } from "@mistralai/mistralai/models/components";

let value: BearerAuthMethod = {
  methodType: "bearer",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `methodType`                                                                                           | *"bearer"*                                                                                             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `headers`                                                                                              | [components.ConnectorAuthenticationHeader](../../models/components/connectorauthenticationheader.md)[] | :heavy_minus_sign:                                                                                     | Optional additional headers sent with requests.                                                        |