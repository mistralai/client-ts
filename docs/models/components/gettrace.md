# GetTrace

## Example Usage

```typescript
import { GetTrace } from "@mistralai/mistralai/models/components";

let value: GetTrace = {
  customerId: "<id>",
  organizationId: "<id>",
  workspaceId: "<id>",
  userId: "<id>",
  traceId: "<id>",
  rootSpanId: "<id>",
  rootSpanName: "<value>",
  startTime: new Date("2026-01-01T13:24:32.172Z"),
  endTime: new Date("2025-07-24T18:25:37.829Z"),
  durationNs: 836244,
  serviceName: "<value>",
  environment: "<value>",
  conversationId: "<id>",
  workflowName: "<value>",
  agentId: "<id>",
  agentName: "<value>",
  statusCode: "Unset",
  errorCount: 503453,
  spanCount: 920274,
  genAiSpanCount: 171943,
  llmCallCount: 503008,
  toolCallCount: 497731,
  retrievalCount: 611981,
  evaluationCount: 365965,
  inputTokens: 725274,
  outputTokens: 939590,
  cacheReadInputTokens: 584201,
  cacheCreationInputTokens: 514652,
  modelsUsed: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  toolsUsed: [],
  firstTurnLastInputMessage: "<value>",
  firstTurnLastOutputMessage: "<value>",
  lastTurnLastInputMessage: "<value>",
  lastTurnLastOutputMessage: "<value>",
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
| `rootSpanId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rootSpanName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `durationNs`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `serviceName`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `environment`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `conversationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowName`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `agentName`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `statusCode`                                                                                  | [components.GetTraceStatusCode](../../models/components/gettracestatuscode.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `errorCount`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `spanCount`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `genAiSpanCount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `llmCallCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolCallCount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `retrievalCount`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `evaluationCount`                                                                             | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inputTokens`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `outputTokens`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cacheReadInputTokens`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cacheCreationInputTokens`                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modelsUsed`                                                                                  | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toolsUsed`                                                                                   | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `firstTurnLastInputMessage`                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `firstTurnLastOutputMessage`                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastTurnLastInputMessage`                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastTurnLastOutputMessage`                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |