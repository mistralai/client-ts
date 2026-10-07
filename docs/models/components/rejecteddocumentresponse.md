# RejectedDocumentResponse

## Example Usage

```typescript
import { RejectedDocumentResponse } from "@mistralai/mistralai/models/components";

let value: RejectedDocumentResponse = {
  status: "rejected",
  position: 498122,
  errors: [
    {
      location: [
        "<value>",
      ],
      type: "<value>",
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `status`                                                                                         | *"rejected"*                                                                                     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `position`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `errors`                                                                                         | [components.DocumentFieldErrorResponse](../../models/components/documentfielderrorresponse.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |