# SetServiceAccountRolesRequest

Request body for replacing the workspace roles assigned to a service account.

## Example Usage

```typescript
import { SetServiceAccountRolesRequest } from "@mistralai/mistralai/models/components";

let value: SetServiceAccountRolesRequest = {
  roleIds: [
    "7e69e493-caf6-4671-af60-84951754d9fc",
  ],
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         | Example                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `roleIds`                                                                                                                                                                                           | *string*[]                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                  | Workspace role UUIDs to assign. Required and non-empty; omitted or empty lists return 422. Select member explicitly for no role-granted permissions; workspace-wide sharing may still grant access. | [<br/>"7e69e493-caf6-4671-af60-84951754d9fc"<br/>]                                                                                                                                                  |