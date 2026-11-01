# Trigger

## Example Usage

```typescript
import { Trigger } from "@mistralai/mistralai/models/components";

let value: Trigger = {
  id: "4c25adf3-86ec-43a0-b5a5-4531e67443f9",
  creatorId: "6b246041-4255-429d-8325-5e11eb948db6",
  workspaceId: "44a33cf1-1337-4cd9-aca6-0510b7254f1a",
  organizationId: "6562eae6-dd35-4149-bf70-4b83769b8dc8",
  customerId: "227702ba-fa0b-4f15-8134-311555d8664e",
  ownerType: "user",
  eventSource: {
    id: "b51d6629-d4bf-4d30-b168-2be943345605",
    creatorId: "ce513f70-40e6-4095-a4b6-9a7b572c7b1e",
    organizationId: "052fcc2e-cf42-4b38-a3b7-de89b7014f38",
    workspaceId: "4ada8db3-a5ab-435a-b7d3-40f811647534",
    ownerType: "workspace",
    provider: "linear",
    name: "<value>",
    url: "https://chubby-draft.com/",
    httpMethod: "<value>",
    urlVerified: false,
    signatureHashAlgorithm: "sha1",
    signatureHeaderName: "<value>",
    validityPeriodSecond: 684037,
    signatureExtractorRegex: "<value>",
    timestampExtractorRegex: "<value>",
    signaturePayloadPattern: "<value>",
    signatureEncoding: "base64",
    successStatusCode: 252398,
    eventTypePath: "<value>",
    expiresAt: new Date("2026-12-01T03:46:53.167Z"),
    createdAt: new Date("2024-09-26T10:58:44.522Z"),
    updatedAt: new Date("2026-03-20T15:16:30.213Z"),
  },
  handler: "workflows",
  action: {
    primitiveId: "<id>",
    type: "start_agent_session",
  },
  filters: "<value>",
  title: "<value>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `creatorId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `workspaceId`                                                                | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `organizationId`                                                             | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `customerId`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `ownerType`                                                                  | [components.TriggersOwnerType](../../models/components/triggersownertype.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `eventSource`                                                                | [components.Webhook](../../models/components/webhook.md)                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `handler`                                                                    | [components.TriggerHandler](../../models/components/triggerhandler.md)       | :heavy_check_mark:                                                           | N/A                                                                          |
| `action`                                                                     | [components.TriggerAction](../../models/components/triggeraction.md)         | :heavy_check_mark:                                                           | N/A                                                                          |
| `filters`                                                                    | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `title`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |