# AudioSessionPhoneNumber

The line the call came in on, as it stands now.

## Example Usage

```typescript
import { AudioSessionPhoneNumber } from "@mistralai/mistralai/models/components";

let value: AudioSessionPhoneNumber = {
  id: "7760f462-fcff-4f9c-af95-28bc5b8c2f36",
  identifier: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `id`                                         | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `identifier`                                 | *string*                                     | :heavy_check_mark:                           | What the caller dialed to reach this number. |
| `name`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |