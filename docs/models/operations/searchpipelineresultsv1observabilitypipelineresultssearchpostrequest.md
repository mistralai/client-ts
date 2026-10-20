# SearchPipelineResultsV1ObservabilityPipelineResultsSearchPostRequest

## Example Usage

```typescript
import { SearchPipelineResultsV1ObservabilityPipelineResultsSearchPostRequest } from "@mistralai/mistralai/models/operations";

let value:
  SearchPipelineResultsV1ObservabilityPipelineResultsSearchPostRequest = {
    pipelineResultsRequest: {
      pipelineConfigSlugs: [],
    },
  };
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pageSize`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cursor`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `pipelineResultsRequest`                                                                      | [components.PipelineResultsRequest](../../models/components/pipelineresultsrequest.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |