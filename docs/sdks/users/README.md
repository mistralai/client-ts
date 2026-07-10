# Beta.Users

## Overview

### Available Operations

* [getIdentity](#getidentity) - Get Identity

## getIdentity

Get Identity

### Example Usage

<!-- UsageSnippet language="typescript" operationID="users_api_get_identity" method="get" path="/v1/users/me" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral();

async function run() {
  const result = await mistral.beta.users.getIdentity({
    dashboardUserContextAuth: process.env["MISTRAL_DASHBOARD_USER_CONTEXT_AUTH"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MistralCore } from "@mistralai/mistralai/core.js";
import { betaUsersGetIdentity } from "@mistralai/mistralai/funcs/betaUsersGetIdentity.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore();

async function run() {
  const res = await betaUsersGetIdentity(mistral, {
    dashboardUserContextAuth: process.env["MISTRAL_DASHBOARD_USER_CONTEXT_AUTH"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("betaUsersGetIdentity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.UsersApiGetIdentitySecurity](../../models/operations/usersapigetidentitysecurity.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UserIdentity](../../models/components/useridentity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |