# CredentialsStatus

## Example Usage

```typescript
import { CredentialsStatus } from "@mistralai/mistralai/models/components";

let value: CredentialsStatus = {
  statusType: "error",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `statusType`                                                                                       | [components.AuthStatus](../../models/components/authstatus.md)                                     | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `lastCheckedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `errorHttpCode`                                                                                    | [components.HTTPStatus](../../models/components/httpstatus.md)                                     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `errorMessage`                                                                                     | [components.CredentialsStatusErrorReason](../../models/components/credentialsstatuserrorreason.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |