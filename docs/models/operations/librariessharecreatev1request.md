# LibrariesShareCreateV1Request

## Example Usage

```typescript
import { LibrariesShareCreateV1Request } from "@mistralai/mistralai/models/operations";

let value: LibrariesShareCreateV1Request = {
  libraryId: "453ed75f-3803-49a9-bdfc-7d1a82f59e81",
  sharingIn: {
    orgId: "5fed5cf8-70bd-4358-9116-467ff2e1825b",
    level: "Editor",
    shareWithUuid: "bf8c5566-181e-4074-a2cb-2acc1abd87fc",
    shareWithType: "User",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `libraryId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `sharingIn`                                                  | [components.SharingIn](../../models/components/sharingin.md) | :heavy_check_mark:                                           | N/A                                                          |