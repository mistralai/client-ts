# DocumentLibraryTool

## Example Usage

```typescript
import { DocumentLibraryTool } from "@mistralai/mistralai/models/components";

let value: DocumentLibraryTool = {
  libraryIds: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `type`                                                                                   | [components.DocumentLibraryToolType](../../models/components/documentlibrarytooltype.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `libraryIds`                                                                             | *string*[]                                                                               | :heavy_check_mark:                                                                       | Ids of the library in which to search.                                                   |