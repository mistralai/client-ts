# Beta.Observability.ChatCompletionEvents

## Overview

### Available Operations

* [search](#search) - Get Chat Completion Events
* [searchIds](#searchids) - Alternative to /search that returns only the IDs and that can return many IDs at once
* [fetch](#fetch) - Get Chat Completion Event
* [fetchSimilarEvents](#fetchsimilarevents) - Get Similar Chat Completion Events
* [judge](#judge) - Run Judge on an event based on the given options

## search

Get Chat Completion Events

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_chat_completion_events_v1_observability_chat_completion_events_search_post" method="post" path="/v1/observability/chat-completion-events/search" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.chatCompletionEvents.search({
    getChatCompletionEventsInSchema: {
      searchParams: {
        filters: null,
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
import { betaObservabilityChatCompletionEventsSearch } from "@mistralai/mistralai/funcs/betaObservabilityChatCompletionEventsSearch.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityChatCompletionEventsSearch(mistral, {
    getChatCompletionEventsInSchema: {
      searchParams: {
        filters: null,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityChatCompletionEventsSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.GetChatCompletionEventsV1ObservabilityChatCompletionEventsSearchPostRequest](../../models/operations/getchatcompletioneventsv1observabilitychatcompletioneventssearchpostrequest.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `options`                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                   |
| `options.retries`                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                 |

### Response

**Promise\<[components.ChatCompletionEvents](../../models/components/chatcompletionevents.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## searchIds

Alternative to /search that returns only the IDs and that can return many IDs at once

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_chat_completion_event_ids_v1_observability_chat_completion_events_search_ids_post" method="post" path="/v1/observability/chat-completion-events/search-ids" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.chatCompletionEvents.searchIds({
    searchParams: {
      filters: {
        field: "<value>",
        op: "lt",
        value: "<value>",
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
import { betaObservabilityChatCompletionEventsSearchIds } from "@mistralai/mistralai/funcs/betaObservabilityChatCompletionEventsSearchIds.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityChatCompletionEventsSearchIds(mistral, {
    searchParams: {
      filters: {
        field: "<value>",
        op: "lt",
        value: "<value>",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityChatCompletionEventsSearchIds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.GetChatCompletionEventIdsInSchema](../../models/components/getchatcompletioneventidsinschema.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ChatCompletionEventIds](../../models/components/chatcompletioneventids.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## fetch

Get Chat Completion Event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_chat_completion_event_v1_observability_chat_completion_events__event_id__get" method="get" path="/v1/observability/chat-completion-events/{event_id}" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.chatCompletionEvents.fetch({
    eventId: "e79bf81b-b37f-425e-9dff-071a54592e44",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityChatCompletionEventsFetch } from "@mistralai/mistralai/funcs/betaObservabilityChatCompletionEventsFetch.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityChatCompletionEventsFetch(mistral, {
    eventId: "e79bf81b-b37f-425e-9dff-071a54592e44",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityChatCompletionEventsFetch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                      | [operations.GetChatCompletionEventV1ObservabilityChatCompletionEventsEventIdGetRequest](../../models/operations/getchatcompletioneventv1observabilitychatcompletioneventseventidgetrequest.md) | :heavy_check_mark:                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                     |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |

### Response

**Promise\<[components.ChatCompletionEvent](../../models/components/chatcompletionevent.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## fetchSimilarEvents

Get Similar Chat Completion Events

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_similar_chat_completion_events_v1_observability_chat_completion_events__event_id__similar_events_get" method="get" path="/v1/observability/chat-completion-events/{event_id}/similar-events" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.chatCompletionEvents.fetchSimilarEvents({
    eventId: "b7be6e08-d068-45fc-b77a-966232e92fd6",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaObservabilityChatCompletionEventsFetchSimilarEvents } from "@mistralai/mistralai/funcs/betaObservabilityChatCompletionEventsFetchSimilarEvents.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityChatCompletionEventsFetchSimilarEvents(mistral, {
    eventId: "b7be6e08-d068-45fc-b77a-966232e92fd6",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityChatCompletionEventsFetchSimilarEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                | [operations.GetSimilarChatCompletionEventsV1ObservabilityChatCompletionEventsEventIdSimilarEventsGetRequest](../../models/operations/getsimilarchatcompletioneventsv1observabilitychatcompletioneventseventidsimilareventsgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                                                               |
| `options`                                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                           |
| `options.retries`                                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                         |

### Response

**Promise\<[components.ChatCompletionEvents](../../models/components/chatcompletionevents.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |

## judge

Run Judge on an event based on the given options

### Example Usage

<!-- UsageSnippet language="typescript" operationID="judge_chat_completion_event_v1_observability_chat_completion_events__event_id__live_judging_post" method="post" path="/v1/observability/chat-completion-events/{event_id}/live-judging" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.observability.chatCompletionEvents.judge({
    eventId: "dfcd5582-1373-4de5-af51-987464da561c",
    postChatCompletionEventJudgingInSchema: {
      judgeDefinition: {
        name: "<value>",
        description: "total plain self-confidence candid hungrily partial astride cruelly brr",
        modelName: "<value>",
        output: {
          type: "CLASSIFICATION",
          options: [
            {
              value: "<value>",
              description: "indeed insolence delightfully following",
            },
          ],
        },
        instructions: "<value>",
        tools: [],
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
import { betaObservabilityChatCompletionEventsJudge } from "@mistralai/mistralai/funcs/betaObservabilityChatCompletionEventsJudge.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const res = await betaObservabilityChatCompletionEventsJudge(mistral, {
    eventId: "dfcd5582-1373-4de5-af51-987464da561c",
    postChatCompletionEventJudgingInSchema: {
      judgeDefinition: {
        name: "<value>",
        description: "total plain self-confidence candid hungrily partial astride cruelly brr",
        modelName: "<value>",
        output: {
          type: "CLASSIFICATION",
          options: [
            {
              value: "<value>",
              description: "indeed insolence delightfully following",
            },
          ],
        },
        instructions: "<value>",
        tools: [],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaObservabilityChatCompletionEventsJudge failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.JudgeChatCompletionEventV1ObservabilityChatCompletionEventsEventIdLiveJudgingPostRequest](../../models/operations/judgechatcompletioneventv1observabilitychatcompletioneventseventidlivejudgingpostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                             |
| `options.retries`                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                           |

### Response

**Promise\<[components.JudgeOutput](../../models/components/judgeoutput.md)\>**

### Errors

| Error Type                | Status Code               | Content Type              |
| ------------------------- | ------------------------- | ------------------------- |
| errors.ObservabilityError | 400, 404, 408, 409, 422   | application/json          |
| errors.SDKError           | 4XX, 5XX                  | \*/\*                     |