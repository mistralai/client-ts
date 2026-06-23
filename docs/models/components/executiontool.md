# ExecutionTool

## Example Usage

```typescript
import { ExecutionTool } from "@mistralai/mistralai/models/components";

let value: ExecutionTool = {
  name: "<value>",
  integrationId: "75844ea9-4119-482e-8001-efeb28256c2e",
  executionConfig: {
    type: "<value>",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `name`                                                                   | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `integrationId`                                                          | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `executionConfig`                                                        | [components.ExecutionConfig](../../models/components/executionconfig.md) | :heavy_check_mark:                                                       | N/A                                                                      |