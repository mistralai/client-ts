# AudioAgentSessionListPage

## Example Usage

```typescript
import { AudioAgentSessionListPage } from "@mistralai/mistralai/models/components";

let value: AudioAgentSessionListPage = {
  data: [
    {
      id: "fe0445a7-eda6-485d-b5d3-94180fd3213b",
      agentId: "c67e915e-178f-4600-b364-bb79f0998e4c",
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [components.AudioAgentSessionSummary](../../models/components/audioagentsessionsummary.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `nextPageToken`                                                                              | *string*                                                                                     | :heavy_minus_sign:                                                                           | Cursor for the next page, null on the last page                                              |