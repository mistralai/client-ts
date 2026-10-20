# VoiceAgentDocumentLibraryTool

## Example Usage

```typescript
import { VoiceAgentDocumentLibraryTool } from "@mistralai/mistralai/models/components";

let value: VoiceAgentDocumentLibraryTool = {
  type: "document_library",
  libraryIds: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `toolConfiguration`                                                          | [components.ToolConfiguration](../../models/components/toolconfiguration.md) | :heavy_minus_sign:                                                           | N/A                                                                          |
| `type`                                                                       | *"document_library"*                                                         | :heavy_check_mark:                                                           | N/A                                                                          |
| `libraryIds`                                                                 | *string*[]                                                                   | :heavy_check_mark:                                                           | Ids of the library in which to search.                                       |
| `filler`                                                                     | [components.StaticToolFiller](../../models/components/statictoolfiller.md)   | :heavy_minus_sign:                                                           | N/A                                                                          |