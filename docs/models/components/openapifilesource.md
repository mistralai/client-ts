# OpenApiFileSource

## Example Usage

```typescript
import { OpenApiFileSource } from "@mistralai/mistralai/models/components";

let value: OpenApiFileSource = {
  type: "file",
  filename: "example.file",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `type`                         | *"file"*                       | :heavy_check_mark:             | N/A                            |
| `filename`                     | *string*                       | :heavy_check_mark:             | The name of the uploaded file. |