# SignalInvocationBody

## Example Usage

```typescript
import { SignalInvocationBody } from "@mistralai/mistralai/models/components";

let value: SignalInvocationBody = {
  name: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | The name of the signal to send                 |
| `input`                                        | *components.SignalInvocationBodyInput*         | :heavy_minus_sign:                             | Input data for the signal, matching its schema |