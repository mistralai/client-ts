# CreateRealtimeSessionResponse

## Example Usage

```typescript
import { CreateRealtimeSessionResponse } from "@mistralai/mistralai/models/components";

let value: CreateRealtimeSessionResponse = {
  purpose: "realtime",
  expiresAt: new Date("2024-01-27T18:30:18.901Z"),
  clientSecret: {
    value: "jsl0IgVwoODlxZx",
    expiresAt: new Date("2026-04-09T05:21:10.561Z"),
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `object`                                                                                      | *"client.session"*                                                                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `purpose`                                                                                     | [components.ClientSessionPurpose](../../models/components/clientsessionpurpose.md)            | :heavy_check_mark:                                                                            | Supported purposes for client sessions.                                                       |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `clientSecret`                                                                                | [components.ClientSecret](../../models/components/clientsecret.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |