# GetJudgesV1ObservabilityJudgesGetRequest

## Example Usage

```typescript
import { GetJudgesV1ObservabilityJudgesGetRequest } from "@mistralai/mistralai/models/operations";

let value: GetJudgesV1ObservabilityJudgesGetRequest = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `typeFilter`                                                               | [components.JudgeOutputType](../../models/components/judgeoutputtype.md)[] | :heavy_minus_sign:                                                         | Filter by judge output types                                               |
| `modelFilter`                                                              | *string*[]                                                                 | :heavy_minus_sign:                                                         | Filter by model names                                                      |
| `pageSize`                                                                 | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `page`                                                                     | *number*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |
| `q`                                                                        | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |