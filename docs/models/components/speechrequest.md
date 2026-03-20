# SpeechRequest

## Example Usage

```typescript
import { SpeechRequest } from "@mistralai/mistralai/models/components";

let value: SpeechRequest = {
  input: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `model`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `metadata`                                                                     | [components.MetadataDict](../../models/components/metadatadict.md)             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `stream`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `voiceId`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The preset or custom voice to use for generating the speech.                   |
| `refAudio`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The audio reference for generating the speech.                                 |
| `input`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | Text to generate a speech from                                                 |
| `responseFormat`                                                               | [components.SpeechOutputFormat](../../models/components/speechoutputformat.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `additionalProperties`                                                         | Record<string, *any*>                                                          | :heavy_minus_sign:                                                             | N/A                                                                            |