# DeploymentArchiveResponse

The archive a managed deployment builds from, with a signed URL to download it.

## Example Usage

```typescript
import { DeploymentArchiveResponse } from "@mistralai/mistralai/models/components";

let value: DeploymentArchiveResponse = {
  archiveId: "ebb76219-f156-46c1-b6f3-bdb2994a5f86",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `archiveId`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Mistral Cloud archive the worker builds from                                                                          |
| `downloadUrl`                                                                                                         | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | A signed URL to download the archive, which expires within 24 hours. Null once Mistral Cloud has deleted the archive. |