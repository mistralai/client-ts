# UserWorkspace

## Example Usage

```typescript
import { UserWorkspace } from "@mistralai/mistralai/models/components";

let value: UserWorkspace = {
  id: "7f8e9d0c-1b2a-4c3d-8e9f-0a1b2c3d4e5f",
  name: "production",
  organizationId: "1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | The workspace's unique identifier.                            | 7f8e9d0c-1b2a-4c3d-8e9f-0a1b2c3d4e5f                          |
| `name`                                                        | *string*                                                      | :heavy_check_mark:                                            | The workspace's display name.                                 | production                                                    |
| `organizationId`                                              | *string*                                                      | :heavy_check_mark:                                            | The identifier of the organization this workspace belongs to. | 1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d                          |