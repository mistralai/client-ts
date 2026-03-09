# Beta.Observability.Datasets

## Overview

### Available Operations

* [create](#create) - Create a new empty dataset
* [list](#list) - List existing datasets
* [fetch](#fetch) - Get dataset by id
* [delete](#delete) - Delete a dataset
* [update](#update) - Patch dataset
* [listRecords](#listrecords) - List existing records in the dataset
* [createRecord](#createrecord) - Add a conversation to the dataset
* [importFromCampaign](#importfromcampaign) - Populate the dataset with a campaign
* [importFromExplorer](#importfromexplorer) - Populate the dataset with samples from the explorer
* [importFromFile](#importfromfile) - Populate the dataset with samples from an uploaded file
* [importFromPlayground](#importfromplayground) - Populate the dataset with samples from the playground
* [importFromDatasetRecords](#importfromdatasetrecords) - Populate the dataset with samples from another dataset
* [exportToJsonl](#exporttojsonl) - Export to the Files API and retrieve presigned URL to download the resulting JSONL file
* [fetchTask](#fetchtask) - Get status of a dataset import task
* [listTasks](#listtasks) - List import tasks for the given dataset

## create

Create a new empty dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_dataset_v1_observability_datasets_post" method="post" path="/v1/observability/datasets" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.create({
    name: "<value>",
    description: "citizen whoever sustenance necessary vibrant openly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsCreate } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsCreate.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsCreate(mistral, {
    name: "<value>",
    description: "citizen whoever sustenance necessary vibrant openly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PostDatasetInSchema](../../models/components/postdatasetinschema.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Dataset](../../models/components/dataset.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## list

List existing datasets

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_datasets_v1_observability_datasets_get" method="get" path="/v1/observability/datasets" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.list({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsList } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsList.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsList(mistral, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatasetsV1ObservabilityDatasetsGetRequest](../../models/operations/getdatasetsv1observabilitydatasetsgetrequest.md)                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DatasetPreviews](../../models/components/datasetpreviews.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## fetch

Get dataset by id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_by_id_v1_observability_datasets__dataset_id__get" method="get" path="/v1/observability/datasets/{dataset_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.fetch({
    datasetId: "036fa362-e080-4fa5-beff-a334a70efb58",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsFetch } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsFetch.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsFetch(mistral, {
    datasetId: "036fa362-e080-4fa5-beff-a334a70efb58",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsFetch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatasetByIdV1ObservabilityDatasetsDatasetIdGetRequest](../../models/operations/getdatasetbyidv1observabilitydatasetsdatasetidgetrequest.md)                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DatasetPreview](../../models/components/datasetpreview.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## delete

Delete a dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_dataset_v1_observability_datasets__dataset_id__delete" method="delete" path="/v1/observability/datasets/{dataset_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  await mistral.beta.observability.datasets.delete({
    datasetId: "baf961a3-bb8e-4085-89ef-de9c5d8c4e77",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsDelete } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsDelete.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsDelete(mistral, {
    datasetId: "baf961a3-bb8e-4085-89ef-de9c5d8c4e77",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("betaObservabilityDatasetsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteDatasetV1ObservabilityDatasetsDatasetIdDeleteRequest](../../models/operations/deletedatasetv1observabilitydatasetsdatasetiddeleterequest.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## update

Patch dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_dataset_v1_observability_datasets__dataset_id__patch" method="patch" path="/v1/observability/datasets/{dataset_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.update({
    datasetId: "95be9afc-fc05-44a6-af9f-2362de1224f9",
    patchDatasetInSchema: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsUpdate } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsUpdate.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsUpdate(mistral, {
    datasetId: "95be9afc-fc05-44a6-af9f-2362de1224f9",
    patchDatasetInSchema: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDatasetV1ObservabilityDatasetsDatasetIdPatchRequest](../../models/operations/updatedatasetv1observabilitydatasetsdatasetidpatchrequest.md)                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DatasetPreview](../../models/components/datasetpreview.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## listRecords

List existing records in the dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_records_v1_observability_datasets__dataset_id__records_get" method="get" path="/v1/observability/datasets/{dataset_id}/records" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.listRecords({
    datasetId: "444d2a88-e636-4bc0-ab6c-919bedaed112",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsListRecords } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsListRecords.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsListRecords(mistral, {
    datasetId: "444d2a88-e636-4bc0-ab6c-919bedaed112",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsListRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatasetRecordsV1ObservabilityDatasetsDatasetIdRecordsGetRequest](../../models/operations/getdatasetrecordsv1observabilitydatasetsdatasetidrecordsgetrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DatasetRecords](../../models/components/datasetrecords.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## createRecord

Add a conversation to the dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_dataset_record_v1_observability_datasets__dataset_id__records_post" method="post" path="/v1/observability/datasets/{dataset_id}/records" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.createRecord({
    datasetId: "4c54ed13-1459-44e1-8696-1a6df06f7177",
    postDatasetRecordInSchema: {
      payload: {
        messages: [
          {
            "key": "<value>",
          },
          {
            "key": "<value>",
            "key1": "<value>",
          },
        ],
      },
      properties: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
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
import { betaObservabilityDatasetsCreateRecord } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsCreateRecord.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsCreateRecord(mistral, {
    datasetId: "4c54ed13-1459-44e1-8696-1a6df06f7177",
    postDatasetRecordInSchema: {
      payload: {
        messages: [
          {
            "key": "<value>",
          },
          {
            "key": "<value>",
            "key1": "<value>",
          },
        ],
      },
      properties: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsCreateRecord failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.CreateDatasetRecordV1ObservabilityDatasetsDatasetIdRecordsPostRequest](../../models/operations/createdatasetrecordv1observabilitydatasetsdatasetidrecordspostrequest.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[components.DatasetRecord](../../models/components/datasetrecord.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## importFromCampaign

Populate the dataset with a campaign

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_dataset_records_from_campaign_v1_observability_datasets__dataset_id__imports_from_campaign_post" method="post" path="/v1/observability/datasets/{dataset_id}/imports/from-campaign" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.importFromCampaign({
    datasetId: "306b5f31-e31c-4e06-9220-e3008c61bf1b",
    postDatasetImportFromCampaignInSchema: {
      campaignId: "71a2e42d-7414-4fe6-89cb-44a2122b6f6b",
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
import { betaObservabilityDatasetsImportFromCampaign } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsImportFromCampaign.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsImportFromCampaign(mistral, {
    datasetId: "306b5f31-e31c-4e06-9220-e3008c61bf1b",
    postDatasetImportFromCampaignInSchema: {
      campaignId: "71a2e42d-7414-4fe6-89cb-44a2122b6f6b",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsImportFromCampaign failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                          | [operations.PostDatasetRecordsFromCampaignV1ObservabilityDatasetsDatasetIdImportsFromCampaignPostRequest](../../models/operations/postdatasetrecordsfromcampaignv1observabilitydatasetsdatasetidimportsfromcampaignpostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                     |
| `options.retries`                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                   |

### Response

**Promise\<[components.DatasetImportTask](../../models/components/datasetimporttask.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## importFromExplorer

Populate the dataset with samples from the explorer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_dataset_records_from_explorer_v1_observability_datasets__dataset_id__imports_from_explorer_post" method="post" path="/v1/observability/datasets/{dataset_id}/imports/from-explorer" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.importFromExplorer({
    datasetId: "ee1930e9-54f7-4c68-aa8a-40fe5d2a3485",
    postDatasetImportFromExplorerInSchema: {
      completionEventIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
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
import { betaObservabilityDatasetsImportFromExplorer } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsImportFromExplorer.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsImportFromExplorer(mistral, {
    datasetId: "ee1930e9-54f7-4c68-aa8a-40fe5d2a3485",
    postDatasetImportFromExplorerInSchema: {
      completionEventIds: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsImportFromExplorer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                          | [operations.PostDatasetRecordsFromExplorerV1ObservabilityDatasetsDatasetIdImportsFromExplorerPostRequest](../../models/operations/postdatasetrecordsfromexplorerv1observabilitydatasetsdatasetidimportsfromexplorerpostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                     |
| `options.retries`                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                   |

### Response

**Promise\<[components.DatasetImportTask](../../models/components/datasetimporttask.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## importFromFile

Populate the dataset with samples from an uploaded file

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_dataset_records_from_file_v1_observability_datasets__dataset_id__imports_from_file_post" method="post" path="/v1/observability/datasets/{dataset_id}/imports/from-file" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.importFromFile({
    datasetId: "1c96c925-cc58-4529-863d-9fe66a6f1924",
    postDatasetImportFromFileInSchema: {
      fileId: "<id>",
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
import { betaObservabilityDatasetsImportFromFile } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsImportFromFile.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsImportFromFile(mistral, {
    datasetId: "1c96c925-cc58-4529-863d-9fe66a6f1924",
    postDatasetImportFromFileInSchema: {
      fileId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsImportFromFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                          | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                          | [operations.PostDatasetRecordsFromFileV1ObservabilityDatasetsDatasetIdImportsFromFilePostRequest](../../models/operations/postdatasetrecordsfromfilev1observabilitydatasetsdatasetidimportsfromfilepostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                         |
| `options`                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                     |
| `options.retries`                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                   |

### Response

**Promise\<[components.DatasetImportTask](../../models/components/datasetimporttask.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## importFromPlayground

Populate the dataset with samples from the playground

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_dataset_records_from_playground_v1_observability_datasets__dataset_id__imports_from_playground_post" method="post" path="/v1/observability/datasets/{dataset_id}/imports/from-playground" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.importFromPlayground({
    datasetId: "5cb42584-5fcf-4837-997a-6a67c5e6900d",
    postDatasetImportFromPlaygroundInSchema: {
      conversationIds: [],
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
import { betaObservabilityDatasetsImportFromPlayground } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsImportFromPlayground.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsImportFromPlayground(mistral, {
    datasetId: "5cb42584-5fcf-4837-997a-6a67c5e6900d",
    postDatasetImportFromPlaygroundInSchema: {
      conversationIds: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsImportFromPlayground failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                  | [operations.PostDatasetRecordsFromPlaygroundV1ObservabilityDatasetsDatasetIdImportsFromPlaygroundPostRequest](../../models/operations/postdatasetrecordsfromplaygroundv1observabilitydatasetsdatasetidimportsfromplaygroundpostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                             |
| `options.retries`                                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                           |

### Response

**Promise\<[components.DatasetImportTask](../../models/components/datasetimporttask.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## importFromDatasetRecords

Populate the dataset with samples from another dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_dataset_records_from_dataset_v1_observability_datasets__dataset_id__imports_from_dataset_post" method="post" path="/v1/observability/datasets/{dataset_id}/imports/from-dataset" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.importFromDatasetRecords({
    datasetId: "ada96a08-d724-4e5c-9111-aaf1bdb7d588",
    postDatasetImportFromDatasetInSchema: {
      datasetRecordIds: [
        "58fe798a-537b-4c61-9efc-d1d96d5d264a",
        "cfa1d197-deda-456e-906b-dd84dccfcd17",
      ],
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
import { betaObservabilityDatasetsImportFromDatasetRecords } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsImportFromDatasetRecords.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsImportFromDatasetRecords(mistral, {
    datasetId: "ada96a08-d724-4e5c-9111-aaf1bdb7d588",
    postDatasetImportFromDatasetInSchema: {
      datasetRecordIds: [
        "58fe798a-537b-4c61-9efc-d1d96d5d264a",
        "cfa1d197-deda-456e-906b-dd84dccfcd17",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsImportFromDatasetRecords failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                      | [operations.PostDatasetRecordsFromDatasetV1ObservabilityDatasetsDatasetIdImportsFromDatasetPostRequest](../../models/operations/postdatasetrecordsfromdatasetv1observabilitydatasetsdatasetidimportsfromdatasetpostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                                     |
| `options`                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                 |
| `options.retries`                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                               |

### Response

**Promise\<[components.DatasetImportTask](../../models/components/datasetimporttask.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## exportToJsonl

Export to the Files API and retrieve presigned URL to download the resulting JSONL file

### Example Usage

<!-- UsageSnippet language="typescript" operationID="export_dataset_to_jsonl_v1_observability_datasets__dataset_id__exports_to_jsonl_get" method="get" path="/v1/observability/datasets/{dataset_id}/exports/to-jsonl" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.exportToJsonl({
    datasetId: "d521add6-d909-4a69-a460-cb880d87b773",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsExportToJsonl } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsExportToJsonl.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsExportToJsonl(mistral, {
    datasetId: "d521add6-d909-4a69-a460-cb880d87b773",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsExportToJsonl failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                          | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                          | [operations.ExportDatasetToJsonlV1ObservabilityDatasetsDatasetIdExportsToJsonlGetRequest](../../models/operations/exportdatasettojsonlv1observabilitydatasetsdatasetidexportstojsonlgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                         |
| `options`                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                     |
| `options.retries`                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                   |

### Response

**Promise\<[components.DatasetExport](../../models/components/datasetexport.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## fetchTask

Get status of a dataset import task

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_import_task_v1_observability_datasets__dataset_id__tasks__task_id__get" method="get" path="/v1/observability/datasets/{dataset_id}/tasks/{task_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.fetchTask({
    datasetId: "b64b504e-58a2-4d52-979b-e2634b301235",
    taskId: "1713cde2-dea1-410d-851e-8cea964ffa14",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsFetchTask } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsFetchTask.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsFetchTask(mistral, {
    datasetId: "b64b504e-58a2-4d52-979b-e2634b301235",
    taskId: "1713cde2-dea1-410d-851e-8cea964ffa14",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsFetchTask failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                    | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                    | [operations.GetDatasetImportTaskV1ObservabilityDatasetsDatasetIdTasksTaskIdGetRequest](../../models/operations/getdatasetimporttaskv1observabilitydatasetsdatasetidtaskstaskidgetrequest.md) | :heavy_check_mark:                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                   |
| `options`                                                                                                                                                                                    | RequestOptions                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                      | :heavy_minus_sign:                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.               |
| `options.retries`                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                             |

### Response

**Promise\<[components.DatasetImportTask](../../models/components/datasetimporttask.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## listTasks

List import tasks for the given dataset

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_dataset_import_tasks_v1_observability_datasets__dataset_id__tasks_get" method="get" path="/v1/observability/datasets/{dataset_id}/tasks" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.datasets.listTasks({
    datasetId: "29903443-7f9c-42a6-9b6b-fc5cbef4191a",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityDatasetsListTasks } from "@mistralai/mistralai/funcs/betaObservabilityDatasetsListTasks.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityDatasetsListTasks(mistral, {
    datasetId: "29903443-7f9c-42a6-9b6b-fc5cbef4191a",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityDatasetsListTasks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.GetDatasetImportTasksV1ObservabilityDatasetsDatasetIdTasksGetRequest](../../models/operations/getdatasetimporttasksv1observabilitydatasetsdatasetidtasksgetrequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[components.DatasetImportTasks](../../models/components/datasetimporttasks.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |