# RealtimeSpeechError

## Example Usage

```typescript
import { RealtimeSpeechError } from "@mistralai/mistralai/models/components";

let value: RealtimeSpeechError = {
  error: {
    message: {
      "key": "<value>",
    },
    code: 824475,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `type`                                                                                       | *"error"*                                                                                    | :heavy_minus_sign:                                                                           | N/A                                                                                          |
| `error`                                                                                      | [components.RealtimeSpeechErrorDetail](../../models/components/realtimespeecherrordetail.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |