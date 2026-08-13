# ListWorkspacesResponse

## Example Usage

```typescript
import { ListWorkspacesResponse } from "@mistralai/mistralai/models/components";

let value: ListWorkspacesResponse = {
  workspaces: [],
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `workspaces`                                                                                           | [components.UserWorkspace](../../models/components/userworkspace.md)[]                                 | :heavy_check_mark:                                                                                     | The workspaces the authenticated user is a member of, each tagged with the organization it belongs to. |