# CreateGithubRepositoryRequest

## Example Usage

```typescript
import { CreateGithubRepositoryRequest } from "@mistralai/mistralai/models/components";

let value: CreateGithubRepositoryRequest = {
  type: "github",
  name: "<value>",
  owner: "<value>",
  token: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `type`             | *"github"*         | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `owner`            | *string*           | :heavy_check_mark: | N/A                |
| `ref`              | *string*           | :heavy_minus_sign: | N/A                |
| `weight`           | *number*           | :heavy_minus_sign: | N/A                |
| `token`            | *string*           | :heavy_check_mark: | N/A                |