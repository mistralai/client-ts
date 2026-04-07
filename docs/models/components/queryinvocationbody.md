# QueryInvocationBody

## Example Usage

```typescript
import { QueryInvocationBody } from "@mistralai/mistralai/models/components";

let value: QueryInvocationBody = {
  name: "<value>",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `name`                                        | *string*                                      | :heavy_check_mark:                            | The name of the query to request              |
| `input`                                       | *components.QueryInvocationBodyInput*         | :heavy_minus_sign:                            | Input data for the query, matching its schema |