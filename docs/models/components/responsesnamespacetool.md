# ResponsesNamespaceTool

## Example Usage

```typescript
import { ResponsesNamespaceTool } from "@mistralai/mistralai/models/components";

let value: ResponsesNamespaceTool = {
  description: "wordy pfft hype aw facilitate omelet",
  name: "<value>",
  tools: [],
  type: "namespace",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `description`                             | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `name`                                    | *string*                                  | :heavy_check_mark:                        | N/A                                       |
| `tools`                                   | *components.ResponsesNamespaceToolTool*[] | :heavy_check_mark:                        | N/A                                       |
| `type`                                    | *"namespace"*                             | :heavy_check_mark:                        | N/A                                       |
| `additionalProperties`                    | Record<string, *any*>                     | :heavy_minus_sign:                        | N/A                                       |