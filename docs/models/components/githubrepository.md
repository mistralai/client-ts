# GithubRepository

## Example Usage

```typescript
import { GithubRepository } from "@mistralai/mistralai/models/components";

let value: GithubRepository = {
  type: "github",
  name: "<value>",
  owner: "<value>",
  commitId: "<id>",
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
| `commitId`         | *string*           | :heavy_check_mark: | N/A                |