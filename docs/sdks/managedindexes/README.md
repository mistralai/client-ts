# Beta.Rag.ManagedIndexes

## Overview

### Available Operations

* [create](#create) - Create a managed index
* [list](#list) - List managed indexes
* [get](#get) - Get a managed index
* [update](#update) - Update a managed index schema
* [delete](#delete) - Delete a managed index
* [ingestDocuments](#ingestdocuments) - Ingest documents into a managed index
* [deleteDocuments](#deletedocuments) - Delete documents from a managed index
* [search](#search) - Search a managed index
* [navigate](#navigate) - Navigate to adjacent chunks
* [read](#read) - Read chunks within a span
* [grep](#grep) - Grep for a pattern within a source
* [getChunk](#getchunk) - Get a single chunk by id
* [getIndexSummary](#getindexsummary) - Get Managed Index Summary
* [generateIndexSummary](#generateindexsummary) - Generate a summary field for a managed index
* [setIndexSummary](#setindexsummary) - Set Managed Index Summary

## create

Reserves a managed search index and starts asynchronous backing-table provisioning. Poll the returned Location until status is ready or failed.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="create_index_v1_context_search_indexes_post" method="post" path="/v1/context/search-indexes" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.create({
    name: "<value>",
    config: {
      embedding: {
        type: "custom",
        name: "<value>",
        dimensions: 378243,
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
import { betaRagManagedIndexesCreate } from "@mistralai/mistralai/funcs/betaRagManagedIndexesCreate.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesCreate(mistral, {
    name: "<value>",
    config: {
      embedding: {
        type: "custom",
        name: "<value>",
        dimensions: 378243,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CreateManagedIndexRequest](../../models/components/createmanagedindexrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateIndexV1ContextSearchIndexesPostResponse](../../models/operations/createindexv1contextsearchindexespostresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## list

Lists all managed search indexes for the current workspace.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="list_indexes_v1_context_search_indexes_get" method="get" path="/v1/context/search-indexes" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagManagedIndexesList } from "@mistralai/mistralai/funcs/betaRagManagedIndexesList.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesList(mistral, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("betaRagManagedIndexesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListIndexesV1ContextSearchIndexesGetRequest](../../models/operations/listindexesv1contextsearchindexesgetrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIndexesV1ContextSearchIndexesGetResponse](../../models/operations/listindexesv1contextsearchindexesgetresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Returns the managed search index with the given name.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_index_v1_context_search_indexes__index_name__get" method="get" path="/v1/context/search-indexes/{index_name}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.get({
    indexName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagManagedIndexesGet } from "@mistralai/mistralai/funcs/betaRagManagedIndexesGet.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesGet(mistral, {
    indexName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetIndexV1ContextSearchIndexesIndexNameGetRequest](../../models/operations/getindexv1contextsearchindexesindexnamegetrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ManagedIndexResponse](../../models/components/managedindexresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Records a new schema for the managed search index and applies it asynchronously. The index keeps serving its current schema until the new one is on disk; poll it until status is ready. Additive only: the new schema must keep every field the current one has.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="update_index_v1_context_search_indexes__index_name__put" method="put" path="/v1/context/search-indexes/{index_name}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.update({
    indexName: "<value>",
    updateManagedIndexRequest: {
      schema: {},
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
import { betaRagManagedIndexesUpdate } from "@mistralai/mistralai/funcs/betaRagManagedIndexesUpdate.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesUpdate(mistral, {
    indexName: "<value>",
    updateManagedIndexRequest: {
      schema: {},
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateIndexV1ContextSearchIndexesIndexNamePutRequest](../../models/operations/updateindexv1contextsearchindexesindexnameputrequest.md)                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ManagedIndexResponse](../../models/components/managedindexresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## delete

Marks the managed search index for deletion and returns it with status deleting. The backing table is dropped asynchronously; poll the index until it returns 404.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_index_v1_context_search_indexes__index_name__delete" method="delete" path="/v1/context/search-indexes/{index_name}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.delete({
    indexName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagManagedIndexesDelete } from "@mistralai/mistralai/funcs/betaRagManagedIndexesDelete.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesDelete(mistral, {
    indexName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteIndexV1ContextSearchIndexesIndexNameDeleteRequest](../../models/operations/deleteindexv1contextsearchindexesindexnamedeleterequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.DeleteManagedIndexResponse](../../models/components/deletemanagedindexresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## ingestDocuments

Validates and persists documents. Always returns 200; each document is reported as accepted or rejected in the response body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="ingest_documents_v1_context_search_indexes__index_name__documents_post" method="post" path="/v1/context/search-indexes/{index_name}/documents" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.ingestDocuments({
    indexName: "<value>",
    ingestDocumentsRequest: {
      documents: [],
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
import { betaRagManagedIndexesIngestDocuments } from "@mistralai/mistralai/funcs/betaRagManagedIndexesIngestDocuments.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesIngestDocuments(mistral, {
    indexName: "<value>",
    ingestDocumentsRequest: {
      documents: [],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesIngestDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IngestDocumentsV1ContextSearchIndexesIndexNameDocumentsPostRequest](../../models/operations/ingestdocumentsv1contextsearchindexesindexnamedocumentspostrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.IngestDocumentsResponse](../../models/components/ingestdocumentsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## deleteDocuments

Deletes the given documents by id. Returns the ids actually removed and, in `missing`, any requested ids that were not present.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_documents_v1_context_search_indexes__index_name__documents_delete" method="delete" path="/v1/context/search-indexes/{index_name}/documents" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.deleteDocuments({
    indexName: "<value>",
    deleteDocumentsRequest: {
      documentIds: [
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
import { betaRagManagedIndexesDeleteDocuments } from "@mistralai/mistralai/funcs/betaRagManagedIndexesDeleteDocuments.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesDeleteDocuments(mistral, {
    indexName: "<value>",
    deleteDocumentsRequest: {
      documentIds: [
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
    console.log("betaRagManagedIndexesDeleteDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.DeleteDocumentsV1ContextSearchIndexesIndexNameDocumentsDeleteRequest](../../models/operations/deletedocumentsv1contextsearchindexesindexnamedocumentsdeleterequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `options`                                                                                                                                                                          | RequestOptions                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                            | :heavy_minus_sign:                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.     |
| `options.retries`                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                   |

### Response

**Promise\<[components.DeleteDocumentsResponse](../../models/components/deletedocumentsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## search

Runs an approximate-nearest-neighbor vector search over the index and returns matching chunks, closest-first.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search_index_v1_context_search_indexes__index_name__search_post" method="post" path="/v1/context/search-indexes/{index_name}/search" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.search({
    indexName: "<value>",
    searchRequest: {
      retriever: {
        topK: 20,
        type: "rrf",
        retrievers: [
          {
            topK: 20,
            type: "keyword",
            query: "<value>",
            operator: "or",
          },
        ],
        rankConstant: 60,
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
import { betaRagManagedIndexesSearch } from "@mistralai/mistralai/funcs/betaRagManagedIndexesSearch.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesSearch(mistral, {
    indexName: "<value>",
    searchRequest: {
      retriever: {
        topK: 20,
        type: "rrf",
        retrievers: [
          {
            topK: 20,
            type: "keyword",
            query: "<value>",
            operator: "or",
          },
        ],
        rankConstant: 60,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchIndexV1ContextSearchIndexesIndexNameSearchPostRequest](../../models/operations/searchindexv1contextsearchindexesindexnamesearchpostrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.SearchResponse](../../models/components/searchresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## navigate

Returns the chunks adjacent to a position within a source, in reading order. NEXT fetches chunks at or after the end offset; PREVIOUS fetches chunks before the start offset. A 200 with an empty list means the source exists but no chunk falls in the requested direction; a 404 means the source has no chunks at all.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="navigate_index_v1_context_search_indexes__index_name__navigate_post" method="post" path="/v1/context/search-indexes/{index_name}/navigate" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.navigate({
    indexName: "<value>",
    navigateRequest: {
      sourceId: "<id>",
      startOffset: 46390,
      endOffset: 670471,
      direction: "next",
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
import { betaRagManagedIndexesNavigate } from "@mistralai/mistralai/funcs/betaRagManagedIndexesNavigate.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesNavigate(mistral, {
    indexName: "<value>",
    navigateRequest: {
      sourceId: "<id>",
      startOffset: 46390,
      endOffset: 670471,
      direction: "next",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesNavigate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.NavigateIndexV1ContextSearchIndexesIndexNameNavigatePostRequest](../../models/operations/navigateindexv1contextsearchindexesindexnamenavigatepostrequest.md)       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.NavigationResponse](../../models/components/navigationresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## read

Returns the chunks of a source whose span falls within [start_offset, end_offset). Either bound may be omitted to leave that side open. A 200 with an empty list means the source exists but no chunk falls in the range; a 404 means the source has no chunks at all.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="read_index_v1_context_search_indexes__index_name__read_post" method="post" path="/v1/context/search-indexes/{index_name}/read" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.read({
    indexName: "<value>",
    readRequest: {
      sourceId: "<id>",
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
import { betaRagManagedIndexesRead } from "@mistralai/mistralai/funcs/betaRagManagedIndexesRead.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesRead(mistral, {
    indexName: "<value>",
    readRequest: {
      sourceId: "<id>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesRead failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReadIndexV1ContextSearchIndexesIndexNameReadPostRequest](../../models/operations/readindexv1contextsearchindexesindexnamereadpostrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.NavigationResponse](../../models/components/navigationresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## grep

Lexical substring match within a single source, in reading order. PHRASE mode matches the pattern literally (whitespace-sensitive, case-insensitive); TERM mode requires every whitespace-split token present in any order. A 200 with an empty list means the source exists but no chunk matched; a 404 means the source has no chunks at all.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="grep_index_v1_context_search_indexes__index_name__grep_post" method="post" path="/v1/context/search-indexes/{index_name}/grep" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.grep({
    indexName: "<value>",
    grepRequest: {
      sourceId: "<id>",
      pattern: "<value>",
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
import { betaRagManagedIndexesGrep } from "@mistralai/mistralai/funcs/betaRagManagedIndexesGrep.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesGrep(mistral, {
    indexName: "<value>",
    grepRequest: {
      sourceId: "<id>",
      pattern: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesGrep failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GrepIndexV1ContextSearchIndexesIndexNameGrepPostRequest](../../models/operations/grepindexv1contextsearchindexesindexnamegreppostrequest.md)                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.NavigationResponse](../../models/components/navigationresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getChunk

Returns a single chunk by its canonical id. A 404 means no chunk with that id exists in the index.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_chunk_index_v1_context_search_indexes__index_name__chunks__chunk_id__get" method="get" path="/v1/context/search-indexes/{index_name}/chunks/{chunk_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.getChunk({
    indexName: "<value>",
    chunkId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagManagedIndexesGetChunk } from "@mistralai/mistralai/funcs/betaRagManagedIndexesGetChunk.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesGetChunk(mistral, {
    indexName: "<value>",
    chunkId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesGetChunk failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.GetChunkIndexV1ContextSearchIndexesIndexNameChunksChunkIdGetRequest](../../models/operations/getchunkindexv1contextsearchindexesindexnamechunkschunkidgetrequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `options`                                                                                                                                                                        | RequestOptions                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                          | :heavy_minus_sign:                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.   |
| `options.retries`                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                 |

### Response

**Promise\<[components.NavigationResponse](../../models/components/navigationresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## getIndexSummary

Retrieve the summary field for a managed index if it exists

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_managed_index_summary_v1_context_search_indexes__index_name__summary_field__language__get" method="get" path="/v1/context/search-indexes/{index_name}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.getIndexSummary({
    language: "de",
    indexName: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaRagManagedIndexesGetIndexSummary } from "@mistralai/mistralai/funcs/betaRagManagedIndexesGetIndexSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesGetIndexSummary(mistral, {
    language: "de",
    indexName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesGetIndexSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.GetManagedIndexSummaryV1ContextSearchIndexesIndexNameSummaryFieldLanguageGetRequest](../../models/operations/getmanagedindexsummaryv1contextsearchindexesindexnamesummaryfieldlanguagegetrequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[components.GetSummaryResponseSummary](../../models/components/getsummaryresponsesummary.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## generateIndexSummary

Streams a summary for the managed index in chunks of json.

The first chunk contains metadata for the summary, the following contain
chunks of 'content' that should be joined together to form a full summary.

If force is true, regenerate the requested language even if a summary
already exists.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="generate_managed_index_summary_post_v1_context_search_indexes__index_name__summary_field__language__post" method="post" path="/v1/context/search-indexes/{index_name}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.generateIndexSummary({
    language: "en",
    indexName: "<value>",
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
import { betaRagManagedIndexesGenerateIndexSummary } from "@mistralai/mistralai/funcs/betaRagManagedIndexesGenerateIndexSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesGenerateIndexSummary(mistral, {
    language: "en",
    indexName: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const event of result) {
    // Handle the event
    console.log(event);
  }
  } else {
    console.log("betaRagManagedIndexesGenerateIndexSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                            | [operations.GenerateManagedIndexSummaryPostV1ContextSearchIndexesIndexNameSummaryFieldLanguagePostRequest](../../models/operations/generatemanagedindexsummarypostv1contextsearchindexesindexnamesummaryfieldlanguagepostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                       |
| `options.retries`                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                     |

### Response

**Promise\<[JsonLStream<operations.SummaryStreamTypes>](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## setIndexSummary

Update the summary field for a managed index

### Example Usage

<!-- UsageSnippet language="typescript" operationID="set_managed_index_summary_v1_context_search_indexes__index_name__summary_field__language__put" method="put" path="/v1/context/search-indexes/{index_name}/summary_field/{language}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.rag.managedIndexes.setIndexSummary({
    language: "nl",
    indexName: "<value>",
    updateSummaryRequestSummary: {
      content: "<value>",
      status: "handwritten",
      translated: false,
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
import { betaRagManagedIndexesSetIndexSummary } from "@mistralai/mistralai/funcs/betaRagManagedIndexesSetIndexSummary.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaRagManagedIndexesSetIndexSummary(mistral, {
    language: "nl",
    indexName: "<value>",
    updateSummaryRequestSummary: {
      content: "<value>",
      status: "handwritten",
      translated: false,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaRagManagedIndexesSetIndexSummary failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.SetManagedIndexSummaryV1ContextSearchIndexesIndexNameSummaryFieldLanguagePutRequest](../../models/operations/setmanagedindexsummaryv1contextsearchindexesindexnamesummaryfieldlanguageputrequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
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