# SystemV2

## Example Usage

```typescript
import { SystemV2 } from "@mistralai/mistralai/models/components";

let value: SystemV2 = {
  id: "d0125d51-570f-4c39-afff-2687591dbf57",
  createdAt: new Date("2026-11-18T12:10:21.597Z"),
  updatedAt: new Date("2025-08-19T05:20:28.271Z"),
  deletedAt: null,
  name: "<value>",
  params: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `params`                                                                                      | Record<string, *components.Params*>                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |