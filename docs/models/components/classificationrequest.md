# ClassificationRequest

## Example Usage

```typescript
import { ClassificationRequest } from "@mistralai/mistralai/models/components";

let value: ClassificationRequest = {
  model: "mistral-moderation-latest",
  inputs: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | ID of the model to use.                  | mistral-moderation-latest                |
| `metadata`                               | Record<string, *any*>                    | :heavy_minus_sign:                       | N/A                                      |                                          |
| `inputs`                                 | *components.ClassificationRequestInputs* | :heavy_check_mark:                       | Text to classify.                        |                                          |