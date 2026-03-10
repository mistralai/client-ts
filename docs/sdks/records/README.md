# Beta.Observability.Datasets.Records

## Overview

### Available Operations

* [fetch](#fetch) - Get the content of a given conversation from a dataset
* [delete](#delete) - Delete a record from a dataset
* [bulkDelete](#bulkdelete) - Delete multiple records from datasets
* [judge](#judge) - Run Judge on a dataset record based on the given options
* [updatePayload](#updatepayload) - Update a dataset record conversation payload
* [updateProperties](#updateproperties) - Update conversation properties

## fetch

Get the content of a given conversation from a dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_record_v1_observability_dataset_records__dataset_record_id__get" method="get" path="/v1/observability/dataset-records/{dataset_record_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.records.fetch({
    datasetRecordId: "ce995349-abbf-45c0-be75-885fc1c4b4c0",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsRecordsFetch } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsRecordsFetch.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsRecordsFetch(mistral, {
    datasetRecordId: "ce995349-abbf-45c0-be75-885fc1c4b4c0",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsRecordsFetch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                              | [operations.GetDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdGetRequest](../../models/operations/getdatasetrecordv1observabilitydatasetrecordsdatasetrecordidgetrequest.md) | :heavy_check_mark:                                                                                                                                                                     | The request object to use for the request.                                                                                                                                             |
| `options`                                                                                                                                                                              | RequestOptions                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                | :heavy_minus_sign:                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.         |
| `options.retries`                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                       |

### Response

**Promise\<[components.DatasetRecord](../../models/components/datasetrecord.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## delete

Delete a record from a dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_dataset_record_v1_observability_dataset_records__dataset_record_id__delete" method="delete" path="/v1/observability/dataset-records/{dataset_record_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  await mistral.beta.observability.datasets.records.delete({
    datasetRecordId: "799fed99-80b4-4a9a-a15e-05352b811702",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsRecordsDelete } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsRecordsDelete.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsRecordsDelete(mistral, {
    datasetRecordId: "799fed99-80b4-4a9a-a15e-05352b811702",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("betaObservabilityDatasetsRecordsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.DeleteDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdDeleteRequest](../../models/operations/deletedatasetrecordv1observabilitydatasetrecordsdatasetrecordiddeleterequest.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## bulkDelete

Delete multiple records from datasets

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_dataset_records_v1_observability_dataset_records_bulk_delete_post" method="post" path="/v1/observability/dataset-records/bulk-delete" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  await mistral.beta.observability.datasets.records.bulkDelete({
    datasetRecordIds: [
      "22fc78f7-e774-4ab5-b1ea-63852992ef31",
      "1c533b4f-882e-4bd0-9ef6-9933b825f8b1",
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsRecordsBulkDelete } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsRecordsBulkDelete.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsRecordsBulkDelete(mistral, {
    datasetRecordIds: [
      "22fc78f7-e774-4ab5-b1ea-63852992ef31",
      "1c533b4f-882e-4bd0-9ef6-9933b825f8b1",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("betaObservabilityDatasetsRecordsBulkDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DeleteDatasetRecordsRequest](../../models/components/deletedatasetrecordsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## judge

Run Judge on a dataset record based on the given options

### Example Usage

<!-- UsageSnippet language="typescript" operationID="judge_dataset_record_v1_observability_dataset_records__dataset_record_id__live_judging_post" method="post" path="/v1/observability/dataset-records/{dataset_record_id}/live-judging" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.records.judge({
    datasetRecordId: "9de5d7a1-787a-45dd-b668-9f3407e76d8b",
    judgeDatasetRecordRequest: {
      judgeDefinition: {
        name: "<value>",
        description: "wisely railway deceivingly arcade minion back what yowza outrun service",
        modelName: "<value>",
        output: {
          type: "CLASSIFICATION",
          options: [
            {
              value: "<value>",
              description: "spork excluding without retrospectivity bah next yearly",
            },
          ],
        },
        instructions: "<value>",
        tools: [
          "<value 1>",
        ],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsRecordsJudge } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsRecordsJudge.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsRecordsJudge(mistral, {
    datasetRecordId: "9de5d7a1-787a-45dd-b668-9f3407e76d8b",
    judgeDatasetRecordRequest: {
      judgeDefinition: {
        name: "<value>",
        description: "wisely railway deceivingly arcade minion back what yowza outrun service",
        modelName: "<value>",
        output: {
          type: "CLASSIFICATION",
          options: [
            {
              value: "<value>",
              description: "spork excluding without retrospectivity bah next yearly",
            },
          ],
        },
        instructions: "<value>",
        tools: [
          "<value 1>",
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsRecordsJudge failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                          | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                          | [operations.JudgeDatasetRecordV1ObservabilityDatasetRecordsDatasetRecordIdLiveJudgingPostRequest](../../models/operations/judgedatasetrecordv1observabilitydatasetrecordsdatasetrecordidlivejudgingpostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                         |
| `options`                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                     |
| `options.retries`                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                   |

### Response

**Promise\<[components.JudgeOutput](../../models/components/judgeoutput.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## updatePayload

Update a dataset record conversation payload

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_dataset_record_payload_v1_observability_dataset_records__dataset_record_id__payload_put" method="put" path="/v1/observability/dataset-records/{dataset_record_id}/payload" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  await mistral.beta.observability.datasets.records.updatePayload({
    datasetRecordId: "17506b15-748e-4e7c-9737-c97c44d04b0f",
    updateDatasetRecordPayloadRequest: {
      payload: {
        messages: [
          {
            "key": "<value>",
          },
          {

          },
          {
            "key": "<value>",
          },
        ],
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsRecordsUpdatePayload } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsRecordsUpdatePayload.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsRecordsUpdatePayload(mistral, {
    datasetRecordId: "17506b15-748e-4e7c-9737-c97c44d04b0f",
    updateDatasetRecordPayloadRequest: {
      payload: {
        messages: [
          {
            "key": "<value>",
          },
          {
  
          },
          {
            "key": "<value>",
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("betaObservabilityDatasetsRecordsUpdatePayload failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                | Type                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                 | Description                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                | [operations.UpdateDatasetRecordPayloadV1ObservabilityDatasetRecordsDatasetRecordIdPayloadPutRequest](../../models/operations/updatedatasetrecordpayloadv1observabilitydatasetrecordsdatasetrecordidpayloadputrequest.md) | :heavy_check_mark:                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                               |
| `options`                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                           |
| `options.retries`                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                         |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## updateProperties

Update conversation properties

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_dataset_record_properties_v1_observability_dataset_records__dataset_record_id__properties_put" method="put" path="/v1/observability/dataset-records/{dataset_record_id}/properties" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  await mistral.beta.observability.datasets.records.updateProperties({
    datasetRecordId: "a4deefc5-0905-427e-ad15-1090ef9e216d",
    updateDatasetRecordPropertiesRequest: {
      properties: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsRecordsUpdateProperties } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsRecordsUpdateProperties.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsRecordsUpdateProperties(mistral, {
    datasetRecordId: "a4deefc5-0905-427e-ad15-1090ef9e216d",
    updateDatasetRecordPropertiesRequest: {
      properties: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("betaObservabilityDatasetsRecordsUpdateProperties failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                            | [operations.UpdateDatasetRecordPropertiesV1ObservabilityDatasetRecordsDatasetRecordIdPropertiesPutRequest](../../models/operations/updatedatasetrecordpropertiesv1observabilitydatasetrecordsdatasetrecordidpropertiesputrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                       |
| `options.retries`                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                     |

### Response

**Promise\<void\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |