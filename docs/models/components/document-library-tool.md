# DocumentLibraryTool

## Example Usage

```typescript
import { DocumentLibraryTool } from "@mistralai/mistralai/models/components";

let value: DocumentLibraryTool = {
  type: "document_library",
  libraryIds: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `toolConfiguration`                                                           | [components.ToolConfiguration](../../models/components/tool-configuration.md) | :heavy_minus_sign:                                                            | N/A                                                                           |
| `type`                                                                        | *"document_library"*                                                          | :heavy_check_mark:                                                            | N/A                                                                           |
| `libraryIds`                                                                  | *string*[]                                                                    | :heavy_check_mark:                                                            | Ids of the library in which to search.                                        |