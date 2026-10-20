# AudioAgentSessionSummary

A session of a saved agent, without its transcript.

## Example Usage

```typescript
import { AudioAgentSessionSummary } from "@mistralai/mistralai/models/components";

let value: AudioAgentSessionSummary = {
  id: "e3667ddd-84f8-406a-ac14-fbabb0195524",
  agentId: "6b4c6fa1-ce99-4e68-9fa1-b64c46e2178f",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                            | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `agentId`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `startedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_minus_sign:                                                                                              | When the first participant joined, null if nobody ever did.                                                     |
| `duration`                                                                                                      | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | Seconds from the first participant joining to the session ending, null if nobody joined or it is still running. |
| `phoneNumberId`                                                                                                 | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Set when the session came in over telephony.                                                                    |