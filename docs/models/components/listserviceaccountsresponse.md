# ListServiceAccountsResponse

## Example Usage

```typescript
import { ListServiceAccountsResponse } from "@mistralai/mistralai/models/components";

let value: ListServiceAccountsResponse = {
  items: [
    {
      id: "3718136d-db57-4cee-a05f-997a5c043649",
      name: "<value>",
      customerId: "1f7786fe-779a-4967-b829-f672b0998eec",
      organizationId: "66f4ca09-559c-431b-9738-dbc986851908",
      workspaceId: "a2b6af01-c66c-4a4b-8b7b-8d5ac28ea7bb",
      description: "once off qua outdo cake scarcely cleave once brr",
      createdAt: new Date("2024-07-14T05:53:32.923Z"),
      updatedAt: new Date("2025-10-31T21:40:29.685Z"),
      deletedAt: new Date("2024-03-18T03:44:04.241Z"),
    },
  ],
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.ServiceAccount](../../models/components/serviceaccount.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |