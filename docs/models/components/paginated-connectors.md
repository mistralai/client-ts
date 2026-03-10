# PaginatedConnectors

## Example Usage

```typescript
import { PaginatedConnectors } from "@mistralai/mistralai/models/components";

let value: PaginatedConnectors = {
  items: [
    {
      id: "5ab7db55-8a6f-479d-bd97-ef60c6415117",
      name: "<value>",
      description:
        "hmph notwithstanding meaningfully oof ick ramp and humiliating",
      createdAt: new Date("2025-12-15T13:26:33.828Z"),
      modifiedAt: new Date("2025-08-29T02:54:20.865Z"),
    },
  ],
  pagination: {
    pageSize: 890920,
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `items`                                                                         | [components.Connector](../../models/components/connector.md)[]                  | :heavy_check_mark:                                                              | N/A                                                                             |
| `pagination`                                                                    | [components.PaginationResponse](../../models/components/pagination-response.md) | :heavy_check_mark:                                                              | N/A                                                                             |