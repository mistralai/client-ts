# AudioAgentConfigurationResponseConfig

## Example Usage

```typescript
import { AudioAgentConfigurationResponseConfig } from "@mistralai/mistralai/models/components";

let value: AudioAgentConfigurationResponseConfig = {
  llm: {},
  tts: {},
  stt: {},
  turn: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `llm`                                                                    | [components.AudioLLMConfig](../../models/components/audiollmconfig.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `tts`                                                                    | [components.AudioTTSConfig](../../models/components/audiottsconfig.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `stt`                                                                    | [components.AudioSTTConfig](../../models/components/audiosttconfig.md)   | :heavy_check_mark:                                                       | N/A                                                                      |
| `turn`                                                                   | [components.AudioTurnConfig](../../models/components/audioturnconfig.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `instructions`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `tools`                                                                  | *components.AudioAgentConfigurationResponseConfigTool*[]                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `welcomeMessage`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |