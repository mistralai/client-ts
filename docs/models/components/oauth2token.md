# OAuth2Token

## Example Usage

```typescript
import { OAuth2Token } from "@mistralai/mistralai/models/components";

let value: OAuth2Token = {
  accessToken: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accessToken`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `tokenType`                                                                                   | *"Bearer"*                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresIn`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `scope`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `refreshToken`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |