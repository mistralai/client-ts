# GitCommitMetadata

## Example Usage

```typescript
import { GitCommitMetadata } from "@mistralai/mistralai/models/components";

let value: GitCommitMetadata = {
  sha: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sha`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `message`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `author`                                                                 | [components.GitCommitAuthor](../../models/components/gitcommitauthor.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `htmlUrl`                                                                | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |