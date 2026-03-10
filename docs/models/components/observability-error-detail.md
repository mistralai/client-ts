# ObservabilityErrorDetail

## Example Usage

```typescript
import { ObservabilityErrorDetail } from "@mistralai/mistralai/models/components";

let value: ObservabilityErrorDetail = {
  message: "<value>",
  errorCode: "AUTH_FORBIDDEN_WORKSPACE_NOT_FOUND",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `message`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `errorCode`                                                                              | [components.ObservabilityErrorCode](../../models/components/observability-error-code.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |