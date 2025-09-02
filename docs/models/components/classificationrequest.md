# ClassificationRequest

## Example Usage

```typescript
import { ClassificationRequest } from "@mistralai/mistralai/models/components";

let value: ClassificationRequest = {
  model: "Impala",
  inputs: [],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `model`                                  | *string*                                 | :heavy_check_mark:                       | ID of the model to use.                  |
| `inputs`                                 | *components.ClassificationRequestInputs* | :heavy_check_mark:                       | Text to classify.                        |