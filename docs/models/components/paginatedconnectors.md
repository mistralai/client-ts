# PaginatedConnectors

## Example Usage

```typescript
import { PaginatedConnectors } from "@mistralai/mistralai/models/components";

let value: PaginatedConnectors = {
  items: [
    {
      id: "ab7db558-a6f7-49dd-a97e-f60c6415117e",
      name: "<value>",
      description:
        "pity gym syringe underneath junior brood developing opposite",
      createdAt: new Date("2025-08-29T02:54:20.865Z"),
      modifiedAt: new Date("2026-09-03T10:45:18.008Z"),
      ownerType: "workspace",
      visibility: "shared_global",
      privateToolExecution: false,
      mistral: false,
      protocol: "http",
    },
  ],
  pagination: {
    pageSize: 123547,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `items`                                                                        | *components.Connector*[]                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `pagination`                                                                   | [components.PaginationResponse](../../models/components/paginationresponse.md) | :heavy_check_mark:                                                             | N/A                                                                            |