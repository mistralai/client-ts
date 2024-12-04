# ClassificationRequest

## Example Usage

```typescript
import { ClassificationRequest } from "@mistralai/mistralai/models/components";

let value: ClassificationRequest = {
  inputs: [
    "<value>",
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `inputs`                                 | *components.ClassificationRequestInputs* | :heavy_check_mark:                       | Text to classify.                        |
| `model`                                  | *string*                                 | :heavy_minus_sign:                       | N/A                                      |