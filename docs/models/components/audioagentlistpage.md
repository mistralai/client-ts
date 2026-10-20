# AudioAgentListPage

## Example Usage

```typescript
import { AudioAgentListPage } from "@mistralai/mistralai/models/components";

let value: AudioAgentListPage = {
  data: [],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [components.AudioAgentResponse](../../models/components/audioagentresponse.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `nextPageToken`                                                                  | *string*                                                                         | :heavy_minus_sign:                                                               | Cursor for the next page, null on the last page                                  |