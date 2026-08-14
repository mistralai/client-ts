# UsersApiListWorkspacesRequest

## Example Usage

```typescript
import { UsersApiListWorkspacesRequest } from "@mistralai/mistralai/models/operations";

let value: UsersApiListWorkspacesRequest = {
  organizationId: "1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `organizationId`                                       | *string*                                               | :heavy_minus_sign:                                     | Return only workspaces belonging to this organization. | 1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d                   |
| `offset`                                               | *number*                                               | :heavy_minus_sign:                                     | Number of workspaces to skip before returning results. | 0                                                      |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | Maximum number of workspaces to return.                | 100                                                    |