# Beta.Rag.SearchIndexes

## Overview

### Available Operations

* [register](#register) - Register (or re-register) a search index
* [getIndexSummaries](#getindexsummaries) - Get Index Summaries
* [unregister](#unregister) - Unregister Search Index
* [updateIndexMetrics](#updateindexmetrics) - Update Index Metrics
* [getIndexDetail](#getindexdetail) - Get Index Details
* [getIndexSummary](#getindexsummary) - Get Index Summary
* [generateIndexSummary](#generateindexsummary) - Generate a summary field for an index
* [setIndexSummary](#setindexsummary) - Set Index Summary
* [getSchemaSummary](#getschemasummary) - Get Schema Summary
* [generateSchemaSummary](#generateschemasummary) - Generate a summary field for a schema
* [setSchemaSummary](#setschemasummary) - Set Schema Summary
* [getIndexSchemaDetail](#getindexschemadetail) - Get Index Schema Detail
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

## getIndexSummary

Retrieve the summary field for an index if it exists

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_index_summary_v1_rag_indexes_index__index_id__summary_field__language__get" method="get" path="/v1/rag/indexes/index/{index_id}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.getIndexSummary({
    indexId: "d83e93f2-1d03-4133-90d2-fae51463c71e",
    language: "pt_br",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesGetIndexSummary } from "@mistralai/mistralai/funcs/betaRagSearchIndexesGetIndexSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesGetIndexSummary(mistral, {
    indexId: "d83e93f2-1d03-4133-90d2-fae51463c71e",
    language: "pt_br",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesGetIndexSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.GetIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldLanguageGetRequest](../../models/operations/getindexsummaryv1ragindexesindexindexidsummaryfieldlanguagegetrequest.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[components.GetSummaryResponseSummary](../../models/components/getsummaryresponsesummary.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## generateIndexSummary

Streams a summary for the index in chunks of json.

The first chunk contains metadata for the summary, the following contain
chunks of 'content' that should be joined together to form a full summary.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="generate_index_summary_v1_rag_indexes_index__index_id__summary_field__language__post" method="post" path="/v1/rag/indexes/index/{index_id}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.generateIndexSummary({
    indexId: "b0cfd77c-9cc3-46b6-ad70-1024386259b9",
    language: "pl",
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesGenerateIndexSummary } from "@mistralai/mistralai/funcs/betaRagSearchIndexesGenerateIndexSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesGenerateIndexSummary(mistral, {
    indexId: "b0cfd77c-9cc3-46b6-ad70-1024386259b9",
    language: "pl",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    // Handle the event
    console.log(event);
  }
  } else {
    console.log("betaRagSearchIndexesGenerateIndexSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.GenerateIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldLanguagePostRequest](../../models/operations/generateindexsummaryv1ragindexesindexindexidsummaryfieldlanguagepostrequest.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[JsonLStream<operations.GenerateIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldLanguagePostSummaryStreamTypes>](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## setIndexSummary

Update the summary field for an index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_index_summary_v1_rag_indexes_index__index_id__summary_field__language__put" method="put" path="/v1/rag/indexes/index/{index_id}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.setIndexSummary({
    indexId: "e199a723-75b3-43fe-98fb-5d576435c591",
    language: "pt_br",
    updateSummaryRequestSummary: {
      content: "<value>",
      status: "handwritten",
      translated: true,
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
    indexId: "e199a723-75b3-43fe-98fb-5d576435c591",
    language: "pt_br",
    updateSummaryRequestSummary: {
      content: "<value>",
      status: "handwritten",
      translated: true,
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

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.SetIndexSummaryV1RagIndexesIndexIndexIdSummaryFieldLanguagePutRequest](../../models/operations/setindexsummaryv1ragindexesindexindexidsummaryfieldlanguageputrequest.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `options`                                                                                                                                                                            | RequestOptions                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                              | :heavy_minus_sign:                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.       |
| `options.retries`                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                     |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getSchemaSummary

Retrieve the summary field for a schema if it exists

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_schema_summary_v1_rag_indexes_index__index_id__schemas_schema__schema_id__summary_field__language__get" method="get" path="/v1/rag/indexes/index/{index_id}/schemas/schema/{schema_id}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.getSchemaSummary({
    indexId: "077fb72c-10cd-442d-832e-51fd35136195",
    schemaId: "39f80401-7fc3-4ade-8b1c-b2cd613bab20",
    language: "en",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesGetSchemaSummary } from "@mistralai/mistralai/funcs/betaRagSearchIndexesGetSchemaSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesGetSchemaSummary(mistral, {
    indexId: "077fb72c-10cd-442d-832e-51fd35136195",
    schemaId: "39f80401-7fc3-4ade-8b1c-b2cd613bab20",
    language: "en",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagSearchIndexesGetSchemaSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                        | [operations.GetSchemaSummaryV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdSummaryFieldLanguageGetRequest](../../models/operations/getschemasummaryv1ragindexesindexindexidschemasschemaschemaidsummaryfieldlanguagegetrequest.md) | :heavy_check_mark:                                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                                       |
| `options`                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                   |
| `options.retries`                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                 |

### Response

**Promise\<[components.GetSummaryResponseSummary](../../models/components/getsummaryresponsesummary.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## generateSchemaSummary

Streams a summary for the schema in chunks of json.

The first chunk contains metadata for the summary, the following contain
chunks of 'content' that should be joined together to form a full summary.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="generate_schema_summary_post_v1_rag_indexes_index__index_id__schemas_schema__schema_id__summary_field__language__post" method="post" path="/v1/rag/indexes/index/{index_id}/schemas/schema/{schema_id}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.generateSchemaSummary({
    indexId: "582076c8-276e-4a50-b7a6-2f266925a448",
    schemaId: "5c471724-f36e-41cc-a302-af4f92ea7413",
    language: "it",
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagSearchIndexesGenerateSchemaSummary } from "@mistralai/mistralai/funcs/betaRagSearchIndexesGenerateSchemaSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagSearchIndexesGenerateSchemaSummary(mistral, {
    indexId: "582076c8-276e-4a50-b7a6-2f266925a448",
    schemaId: "5c471724-f36e-41cc-a302-af4f92ea7413",
    language: "it",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    // Handle the event
    console.log(event);
  }
  } else {
    console.log("betaRagSearchIndexesGenerateSchemaSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                            | [operations.GenerateSchemaSummaryPostV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdSummaryFieldLanguagePostRequest](../../models/operations/generateschemasummarypostv1ragindexesindexindexidschemasschemaschemaidsummaryfieldlanguagepostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                       |
| `options.retries`                                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                     |

### Response

**Promise\<[JsonLStream<operations.GenerateSchemaSummaryPostV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdSummaryFieldLanguagePostSummaryStreamTypes>](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## setSchemaSummary

Update the summary field for an index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_schema_summary_v1_rag_indexes_index__index_id__schemas_schema__schema_id__summary_field__language__put" method="put" path="/v1/rag/indexes/index/{index_id}/schemas/schema/{schema_id}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.searchIndexes.setSchemaSummary({
    indexId: "d22ebdfa-6465-4f25-9a27-3e59d85ee544",
    schemaId: "cc29f795-986b-483d-a658-acb000a16f70",
    language: "nl",
    updateSummaryRequestSummary: {
      content: "<value>",
      status: "generated_confirmed",
      translated: true,
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
    indexId: "d22ebdfa-6465-4f25-9a27-3e59d85ee544",
    schemaId: "cc29f795-986b-483d-a658-acb000a16f70",
    language: "nl",
    updateSummaryRequestSummary: {
      content: "<value>",
      status: "generated_confirmed",
      translated: true,
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

| Parameter                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                        | [operations.SetSchemaSummaryV1RagIndexesIndexIndexIdSchemasSchemaSchemaIdSummaryFieldLanguagePutRequest](../../models/operations/setschemasummaryv1ragindexesindexindexidschemasschemaschemaidsummaryfieldlanguageputrequest.md) | :heavy_check_mark:                                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                                       |
| `options`                                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                   |
| `options.retries`                                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                 |

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