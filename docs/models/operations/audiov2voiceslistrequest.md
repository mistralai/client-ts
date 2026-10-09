# AudioV2VoicesListRequest

## Example Usage

```typescript
import { AudioV2VoicesListRequest } from "@mistralai/mistralai/models/operations";

let value: AudioV2VoicesListRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `pageSize`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | Maximum number of voices to return                                                   |
| `pageToken`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | Cursor returned as next_page_token by the previous page                              |
| `type`                                                                               | [operations.AudioV2VoicesListType](../../models/operations/audiov2voiceslisttype.md) | :heavy_minus_sign:                                                                   | Filter the voices between customs and presets                                        |
| `gender`                                                                             | [components.VoiceGender](../../models/components/voicegender.md)[]                   | :heavy_minus_sign:                                                                   | Keep voices matching any of these genders                                            |
| `language`                                                                           | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Keep voices supporting any of these languages                                        |
| `query`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Case-insensitive match on voice name                                                 |