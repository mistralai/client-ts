# Beta.Rag.SearchIndexes

## Overview

### Available Operations

* [register](#register) - Register (or re-register) a search index
* [getIndexSummaries](#getindexsummaries) - Get Index Summaries
* [unregister](#unregister) - Unregister Search Index
* [updateIndexMetrics](#updateindexmetrics) - Update Index Metrics
* [getIndexDetail](#getindexdetail) - Get Index Details
* [setIndexSummary](#setindexsummary) - Set Index Summary
* [getIndexSchemaDetail](#getindexschemadetail) - Get Index Schema Detail
* [setSchemaSummary](#setschemasummary) - Set Schema Summary
* [getIndexSchemaFile](#getindexschemafile) - Get Index Schema File
* [documentLookup](#documentlookup) - Document Lookup
* [documentsFetch](#documentsfetch) - Document Fetch

## register

Register (or re-register) a search index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="register_search_index_v1_rag_indexes_put" method="put" path="/v1/rag/indexes" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.register({
    name: "<value>",
    index: {
      type: "vespa",
      k8sCluster: "<value>",
      k8sNamespace: "<value>",
      vespaInstanceName: "<value>",
      vespaVersion: "<value>",
      schemas: [
        {
          name: "<value>",
          fields: [],
          sd: "<value>",
        },
      ],
      queryUrl: "https://shiny-range.com/",
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
import { betaRagSearchIndexesRegister } from "@mistralai/mistralai/funcs/betaRagSearchIndexesRegister.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesRegister(mistral, {
    name: "<value>",
    index: {
      type: "vespa",
      k8sCluster: "<value>",
      k8sNamespace: "<value>",
      vespaInstanceName: "<value>",
      vespaVersion: "<value>",
      schemas: [
        {
          name: "<value>",
          fields: [],
          sd: "<value>",
        },
      ],
      queryUrl: "https://shiny-range.com/",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesRegister failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.RegisterSearchIndexRequestIndex](../../models/components/registersearchindexrequestindex.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.RegisterSearchIndexResponseIndex](../../models/components/registersearchindexresponseindex.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getIndexSummaries

Fetch summary view of all indexes available to a user

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_index_summaries_v1_rag_indexes_summary_get" method="get" path="/v1/rag/indexes/summary" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.getIndexSummaries();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesGetIndexSummaries } from "@mistralai/mistralai/funcs/betaRagSearchIndexesGetIndexSummaries.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesGetIndexSummaries(mistral);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesGetIndexSummaries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetSearchIndexSummaryResponseIndex[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## unregister

Delete all information about an index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="unregister_search_index_v1_rag_indexes_index__index_id__delete" method="delete" path="/v1/rag/indexes/index/{index_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.unregister({
    indexId: "0e59f390-f2e4-428e-a81c-c9c2f2ced09e",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesUnregister } from "@mistralai/mistralai/funcs/betaRagSearchIndexesUnregister.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesUnregister(mistral, {
    indexId: "0e59f390-f2e4-428e-a81c-c9c2f2ced09e",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesUnregister failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UnregisterSearchIndexV1RagIndexesIndexIndexIdDeleteRequest](../../models/operations/unregistersearchindexv1ragindexesindexindexiddeleterequest.md)                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## updateIndexMetrics

Update the metrics for a given index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_index_metrics_v1_rag_indexes_index__index_id__metrics_put" method="put" path="/v1/rag/indexes/index/{index_id}/metrics" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.updateIndexMetrics({
    indexId: "cb562a81-38ce-49a7-86ec-592676de32a8",
    requestBody: {
      status: "online",
      documentCount: 864436,
      schemaMetrics: [
        {
          name: "<value>",
          documentCount: 109412,
        },
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
import { betaRagSearchIndexesUpdateIndexMetrics } from "@mistralai/mistralai/funcs/betaRagSearchIndexesUpdateIndexMetrics.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesUpdateIndexMetrics(mistral, {
    indexId: "cb562a81-38ce-49a7-86ec-592676de32a8",
    requestBody: {
      status: "online",
      documentCount: 864436,
      schemaMetrics: [
        {
          name: "<value>",
          documentCount: 109412,
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesUpdateIndexMetrics failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIndexMetricsV1RagIndexesIndexIndexIdMetricsPutRequest](../../models/operations/updateindexmetricsv1ragindexesindexindexidmetricsputrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getIndexDetail

Get a detailed view of the stored data for a single index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_index_details_v1_rag_indexes_index__index_id__detail_get" method="get" path="/v1/rag/indexes/index/{index_id}/detail" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.getIndexDetail({
    indexId: "f6ffec01-1f00-47ec-bf94-a08bdc049edc",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesGetIndexDetail } from "@mistralai/mistralai/funcs/betaRagSearchIndexesGetIndexDetail.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesGetIndexDetail(mistral, {
    indexId: "f6ffec01-1f00-47ec-bf94-a08bdc049edc",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesGetIndexDetail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIndexDetailsV1RagIndexesIndexIndexIdDetailGetRequest](../../models/operations/getindexdetailsv1ragindexesindexindexiddetailgetrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetSearchIndexDetailResponseIndex](../../models/components/getsearchindexdetailresponseindex.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## setIndexSummary

Update the summary field for an index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_index_summary_v1_rag_indexes_index__index_id__summary_field_put" method="put" path="/v1/rag/indexes/index/{index_id}/summary_field" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.setIndexSummary({
    indexId: "e77375ab-1284-42f3-9224-d42f3c120e57",
    updateIndexSummaryRequestSummary: {
      summary: "<value>",
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
import { betaRagSearchIndexesSetIndexSummary } from "@mistralai/mistralai/funcs/betaRagSearchIndexesSetIndexSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesSetIndexSummary(mistral, {
    indexId: "e77375ab-1284-42f3-9224-d42f3c120e57",
    updateIndexSummaryRequestSummary: {
      summary: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesSetIndexSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SetIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldPutRequest](../../models/operations/setindexsummaryv1ragindexesindexindexidsummaryfieldputrequest.md)           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getIndexSchemaDetail

Get a detailed view of the stored information for a schema

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_index_schema_detail_v1_rag_indexes_index__index_id__schemas_schema__schema_id__detail_get" method="get" path="/v1/rag/indexes/index/{index_id}/schemas/schema/{schema_id}/detail" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.getIndexSchemaDetail({
    indexId: "af850b81-3290-4f41-83af-f0d2ac1b070d",
    schemaId: "fc2825a7-a8ef-4bec-9729-f7486e8327cb",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesGetIndexSchemaDetail } from "@mistralai/mistralai/funcs/betaRagSearchIndexesGetIndexSchemaDetail.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesGetIndexSchemaDetail(mistral, {
    indexId: "af850b81-3290-4f41-83af-f0d2ac1b070d",
    schemaId: "fc2825a7-a8ef-4bec-9729-f7486e8327cb",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesGetIndexSchemaDetail failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.GetIndexSchemaDetailV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdDetailGetRequest](../../models/operations/getindexschemadetailv1ragindexesindexindexidschemasschemaschemaiddetailgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `options`                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                               |
| `options.retries`                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                             |

### Response

**Promise\<[components.GetSearchIndexSchemaDetailResponseSchemaModel](../../models/components/getsearchindexschemadetailresponseschemamodel.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## setSchemaSummary

Update the summary field for an index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_schema_summary_v1_rag_indexes_index__index_id__schemas_schema__schema_id__summary_field_put" method="put" path="/v1/rag/indexes/index/{index_id}/schemas/schema/{schema_id}/summary_field" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.setSchemaSummary({
    indexId: "1a7d0662-5542-453a-8120-6e22a4fa6187",
    schemaId: "bb5f0528-b652-4c47-81eb-574cb5c442a5",
    updateSchemaSummaryRequestSummary: {
      summary: "<value>",
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
import { betaRagSearchIndexesSetSchemaSummary } from "@mistralai/mistralai/funcs/betaRagSearchIndexesSetSchemaSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesSetSchemaSummary(mistral, {
    indexId: "1a7d0662-5542-453a-8120-6e22a4fa6187",
    schemaId: "bb5f0528-b652-4c47-81eb-574cb5c442a5",
    updateSchemaSummaryRequestSummary: {
      summary: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesSetSchemaSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.SetSchemaSummaryV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdSummaryFieldPutRequest](../../models/operations/setschemasummaryv1ragindexesindexindexidschemasschemaschemaidsummaryfieldputrequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getIndexSchemaFile

Get Index Schema File

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_index_schema_file_v1_rag_indexes_index__index_id__schemas_schema__schema_id__file_get" method="get" path="/v1/rag/indexes/index/{index_id}/schemas/schema/{schema_id}/file" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.getIndexSchemaFile({
    indexId: "252c6de5-4c9b-43b5-8c30-54524a59cb57",
    schemaId: "93166e46-2e3c-4b20-b9a5-8607304372d2",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesGetIndexSchemaFile } from "@mistralai/mistralai/funcs/betaRagSearchIndexesGetIndexSchemaFile.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesGetIndexSchemaFile(mistral, {
    indexId: "252c6de5-4c9b-43b5-8c30-54524a59cb57",
    schemaId: "93166e46-2e3c-4b20-b9a5-8607304372d2",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesGetIndexSchemaFile failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.GetIndexSchemaFileV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdFileGetRequest](../../models/operations/getindexschemafilev1ragindexesindexindexidschemasschemaschemaidfilegetrequest.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `options`                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                       |
| `options.retries`                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                     |

### Response

**Promise\<[components.GetSearchIndexSchemaSDFileResponseSDFile](../../models/components/getsearchindexschemasdfileresponsesdfile.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## documentLookup

Fetch stored information about a retrievable element stored in an index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document_lookup_v1_rag_indexes_index__index_id__schemas_schema__schema_id__retrievables_retrievable__document_id__get" method="get" path="/v1/rag/indexes/index/{index_id}/schemas/schema/{schema_id}/retrievables/retrievable/{document_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.documentLookup({
    indexId: "77308a24-2d8e-4392-9ab4-38770b2bb993",
    schemaId: "1fe735e7-4ec0-4264-b715-12a944fe2b87",
    documentId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesDocumentLookup } from "@mistralai/mistralai/funcs/betaRagSearchIndexesDocumentLookup.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesDocumentLookup(mistral, {
    indexId: "77308a24-2d8e-4392-9ab4-38770b2bb993",
    schemaId: "1fe735e7-4ec0-4264-b715-12a944fe2b87",
    documentId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesDocumentLookup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                              | [operations.DocumentLookupV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdRetrievablesRetrievableDocumentIdGetRequest](../../models/operations/documentlookupv1ragindexesindexindexidschemasschemaschemaidretrievablesretrievabledocumentidgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                         |
| `options.retries`                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                       |

### Response

**Promise\<[components.VespaGetRetrievableResponseRetrievable](../../models/components/vespagetretrievableresponseretrievable.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## documentsFetch

Fetch a few stored retrievable elements from the index/schema

### Example Usage

<!-- UsageSnippet language="typescript" operationID="document_fetch_v1_rag_indexes_index__index_id__schemas_schema__schema_id__retrievables_get" method="get" path="/v1/rag/indexes/index/{index_id}/schemas/schema/{schema_id}/retrievables" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.documentsFetch({
    indexId: "7c9f7007-1a54-48fd-b6da-93e91f31f6aa",
    schemaId: "7eb7703c-1b80-4ecc-8a8b-288b43e1f30e",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesDocumentsFetch } from "@mistralai/mistralai/funcs/betaRagSearchIndexesDocumentsFetch.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesDocumentsFetch(mistral, {
    indexId: "7c9f7007-1a54-48fd-b6da-93e91f31f6aa",
    schemaId: "7eb7703c-1b80-4ecc-8a8b-288b43e1f30e",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesDocumentsFetch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.DocumentFetchV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdRetrievablesGetRequest](../../models/operations/documentfetchv1ragindexesindexindexidschemasschemaschemaidretrievablesgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |

### Response

**Promise\<[components.VespaGetRetrievableResponseRetrievable[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |