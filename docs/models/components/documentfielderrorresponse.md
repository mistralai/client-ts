# DocumentFieldErrorResponse

A single field-level validation failure within a rejected document.

## Example Usage

```typescript
import { DocumentFieldErrorResponse } from "@mistralai/mistralai/models/components";

let value: DocumentFieldErrorResponse = {
  location: [],
  type: "<value>",
  message: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `location`              | *components.Location*[] | :heavy_check_mark:      | N/A                     |
| `type`                  | *string*                | :heavy_check_mark:      | N/A                     |
| `message`               | *string*                | :heavy_check_mark:      | N/A                     |