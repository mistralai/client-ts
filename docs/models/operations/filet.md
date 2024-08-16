# FileT

## Example Usage

```typescript
import { FileT } from "@mistralai/mistralai/models/operations";

let value: FileT = {
    fileName: "your_file_here",
    content: new TextEncoder().encode("0xa6fe668dA9"),
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |