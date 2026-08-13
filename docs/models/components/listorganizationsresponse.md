# ListOrganizationsResponse

## Example Usage

```typescript
import { ListOrganizationsResponse } from "@mistralai/mistralai/models/components";

let value: ListOrganizationsResponse = {
  organizations: [
    {
      id: "1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d",
      name: "Acme Corp",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `organizations`                                                              | [components.UserOrganization](../../models/components/userorganization.md)[] | :heavy_check_mark:                                                           | The organizations the authenticated user is a member of.                     |