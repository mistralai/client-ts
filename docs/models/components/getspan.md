# GetSpan

## Example Usage

```typescript
import { GetSpan } from "@mistralai/mistralai/models/components";

let value: GetSpan = {
  customerId: "<id>",
  organizationId: "<id>",
  workspaceId: "<id>",
  userId: "<id>",
  traceId: "<id>",
  spanId: "<id>",
  parentSpanId: "<id>",
  traceState: "<value>",
  startTime: new Date("2024-11-14T11:08:43.399Z"),
  endTime: new Date("2026-02-02T13:54:31.021Z"),
  durationNs: 604614,
  spanName: "<value>",
  spanKind: "<value>",
  serviceName: "<value>",
  statusCode: "Ok",
  statusMessage: "<value>",
  errorType: "<value>",
  operationName: "<value>",
  providerName: "<value>",
  requestModel: "<value>",
  responseModel: "<value>",
  responseId: "<id>",
  outputType: "<value>",
  conversationId: "<id>",
  dataSourceId: "<id>",
  agentId: "<id>",
  agentName: "<value>",
  agentVersion: "<value>",
  agentDescription: "<value>",
  workflowName: "<value>",
  promptName: "<value>",
  toolName: "<value>",
  toolType: "<value>",
  toolCallId: "<id>",
  inputMessages: "<value>",
  outputMessages: "<value>",
  systemInstructions: "<value>",
  toolDefinitions: "<value>",
  toolCallArguments: "<value>",
  toolCallResult: "<value>",
  requestChoiceCount: 273241,
  requestMaxTokens: 921117,
  requestTemperature: 4823.16,
  requestTopP: 9650.04,
  requestTopK: 4106.09,
  requestPresencePenalty: 1253.81,
  requestFrequencyPenalty: null,
  requestSeed: 126581,
  requestStopSequences: [],
  requestEncodingFormats: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  responseFinishReasons: [
    "<value 1>",
  ],
  usageInputTokens: 322898,
  usageOutputTokens: 454951,
  usageCacheReadInputTokens: 384487,
  usageCacheCreationInputTokens: 216315,
  resourceAttributes: {},
  spanAttributes: {},
  scopeName: "<value>",
  scopeVersion: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `traceId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `parentSpanId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `traceState`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationNs`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanKind`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `serviceName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statusCode`                                                                                  | [components.GetSpanStatusCode](../../models/components/getspanstatuscode.md)                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statusMessage`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `errorType`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `operationName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `providerName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestModel`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `responseModel`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `responseId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `outputType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `dataSourceId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentVersion`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentDescription`                                                                            | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `promptName`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolName`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolType`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolCallId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inputMessages`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `outputMessages`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `systemInstructions`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolDefinitions`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolCallArguments`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolCallResult`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestChoiceCount`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestMaxTokens`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestTemperature`                                                                          | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestTopP`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestTopK`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestPresencePenalty`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestFrequencyPenalty`                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestSeed`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestStopSequences`                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `requestEncodingFormats`                                                                      | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `responseFinishReasons`                                                                       | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usageInputTokens`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usageOutputTokens`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usageCacheReadInputTokens`                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `usageCacheCreationInputTokens`                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `resourceAttributes`                                                                          | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanAttributes`                                                                              | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopeName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `scopeVersion`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |