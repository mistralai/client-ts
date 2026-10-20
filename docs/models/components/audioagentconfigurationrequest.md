# AudioAgentConfigurationRequest

## Example Usage

```typescript
import { AudioAgentConfigurationRequest } from "@mistralai/mistralai/models/components";

let value: AudioAgentConfigurationRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `llm`                                                                    | [components.AudioLLMConfig](../../models/components/audiollmconfig.md)   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `tts`                                                                    | [components.AudioTTSConfig](../../models/components/audiottsconfig.md)   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `stt`                                                                    | [components.AudioSTTConfig](../../models/components/audiosttconfig.md)   | :heavy_minus_sign:                                                       | N/A                                                                      |
| `turn`                                                                   | [components.AudioTurnConfig](../../models/components/audioturnconfig.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `instructions`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `tools`                                                                  | *components.AudioAgentConfigurationRequestTool*[]                        | :heavy_minus_sign:                                                       | N/A                                                                      |
| `welcomeMessage`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |