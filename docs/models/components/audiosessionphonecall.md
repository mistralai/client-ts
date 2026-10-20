# AudioSessionPhoneCall

The phone line a session is attached to.

Present only when the caller reached the agent over telephony, `null` for a
session started from a browser or the API.

## Example Usage

```typescript
import { AudioSessionPhoneCall } from "@mistralai/mistralai/models/components";

let value: AudioSessionPhoneCall = {
  phoneNumberId: "742d3430-3ae7-4748-9a79-e51db27a31d8",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `phoneNumberId`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `phoneNumber`                                                                              | [components.AudioSessionPhoneNumber](../../models/components/audiosessionphonenumber.md)   | :heavy_minus_sign:                                                                         | The number as it stands now, or null once it has been released or when you cannot read it. |