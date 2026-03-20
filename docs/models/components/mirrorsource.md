# MirrorSource

Source information for mirrored requests.

## Example Usage

```typescript
import { MirrorSource } from "@mistralai/mistralai/models/components";

let value: MirrorSource = {
  app: "<value>",
  rootModelName: "<value>",
  mirrorModelName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `app`              | *string*           | :heavy_check_mark: | N/A                |
| `version`          | *string*           | :heavy_minus_sign: | N/A                |
| `rootModelName`    | *string*           | :heavy_check_mark: | N/A                |
| `mirrorModelName`  | *string*           | :heavy_check_mark: | N/A                |
| `experimentId`     | *string*           | :heavy_minus_sign: | N/A                |