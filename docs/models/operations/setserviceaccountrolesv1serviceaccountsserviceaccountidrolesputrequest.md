# SetServiceAccountRolesV1ServiceAccountsServiceAccountIdRolesPutRequest

## Example Usage

```typescript
import { SetServiceAccountRolesV1ServiceAccountsServiceAccountIdRolesPutRequest } from "@mistralai/mistralai/models/operations";

let value:
  SetServiceAccountRolesV1ServiceAccountsServiceAccountIdRolesPutRequest = {
    serviceAccountId: "507da8ba-e05e-4a3f-a0c2-f9502a8850d2",
    setServiceAccountRolesRequest: {
      roleIds: [
        "7e69e493-caf6-4671-af60-84951754d9fc",
      ],
    },
  };
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `serviceAccountId`                                                                                   | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `setServiceAccountRolesRequest`                                                                      | [components.SetServiceAccountRolesRequest](../../models/components/setserviceaccountrolesrequest.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |