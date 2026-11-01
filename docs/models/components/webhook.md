# Webhook

## Example Usage

```typescript
import { Webhook } from "@mistralai/mistralai/models/components";

let value: Webhook = {
  id: "cbaea92a-d065-47e9-bddf-3491757c3776",
  creatorId: "94ded25e-2e8d-495a-9da5-00784e0d8402",
  organizationId: "23bfdaea-f922-40b0-9fbb-2be0ab31fa7f",
  workspaceId: "f9388db4-cbc6-445a-a245-4bc298ff6ef8",
  ownerType: "user",
  provider: "lucca",
  name: "<value>",
  url: "https://silver-boulevard.info/",
  httpMethod: "<value>",
  urlVerified: false,
  signatureHashAlgorithm: "sha1",
  signatureHeaderName: "<value>",
  validityPeriodSecond: 677633,
  signatureExtractorRegex: "<value>",
  timestampExtractorRegex: "<value>",
  signaturePayloadPattern: null,
  signatureEncoding: "hex",
  successStatusCode: 135372,
  eventTypePath: "<value>",
  expiresAt: new Date("2026-01-08T20:27:57.236Z"),
  createdAt: new Date("2026-09-17T03:55:07.122Z"),
  updatedAt: new Date("2025-08-12T14:54:53.169Z"),
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `creatorId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `workspaceId`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `ownerType`                                                                                          | [components.TriggersOwnerType](../../models/components/triggersownertype.md)                         | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `provider`                                                                                           | [components.WebhookProvider](../../models/components/webhookprovider.md)                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `url`                                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `httpMethod`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `urlVerified`                                                                                        | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `signatureHashAlgorithm`                                                                             | [components.WebhookSignatureHashAlgorithm](../../models/components/webhooksignaturehashalgorithm.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `signatureHeaderName`                                                                                | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `validityPeriodSecond`                                                                               | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `signatureExtractorRegex`                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `timestampExtractorRegex`                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `signaturePayloadPattern`                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `signatureEncoding`                                                                                  | [components.WebhookSignatureEncoding](../../models/components/webhooksignatureencoding.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `successStatusCode`                                                                                  | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `eventTypePath`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `expiresAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `updatedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |