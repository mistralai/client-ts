# UserIdentity

## Example Usage

```typescript
import { UserIdentity } from "@mistralai/mistralai/models/components";

let value: UserIdentity = {
  id: "<id>",
  email: "Morgan49@hotmail.com",
  firstName: null,
  lastName: "Pfannerstill",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `email`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `firstName`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `lastName`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `workspace`                                                                                | [components.UserIdentityWorkspace](../../models/components/useridentityworkspace.md)       | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `organization`                                                                             | [components.UserIdentityOrganization](../../models/components/useridentityorganization.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `apiKey`                                                                                   | [components.UserIdentityApiKey](../../models/components/useridentityapikey.md)             | :heavy_minus_sign:                                                                         | N/A                                                                                        |