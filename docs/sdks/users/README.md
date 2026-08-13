# Beta.Users

## Overview

### Available Operations

* [getIdentity](#getidentity) - Get Identity
* [listOrganizations](#listorganizations) - List Organizations
* [listWorkspaces](#listworkspaces) - List Workspaces

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

## listOrganizations

List every organization the authenticated user is a member of.

Identity-only: the caller need not have selected an organization, so this
reads only the user and never scopes by the active org.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="users_api_list_organizations" method="get" path="/v1/users/me/organizations" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral();

async function run() {
  const result = await mistral.beta.users.listOrganizations({
    dashboardUserContextAuth: process.env["MISTRAL_DASHBOARD_USER_CONTEXT_AUTH"] ?? "",
  }, {});

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
import { betaUsersListOrganizations } from "@mistralai/mistralai/funcs/betaUsersListOrganizations.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore();

async function run() {
  const res = await betaUsersListOrganizations(mistral, {
    dashboardUserContextAuth: process.env["MISTRAL_DASHBOARD_USER_CONTEXT_AUTH"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("betaUsersListOrganizations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UsersApiListOrganizationsRequest](../../models/operations/usersapilistorganizationsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UsersApiListOrganizationsSecurity](../../models/operations/usersapilistorganizationssecurity.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UsersApiListOrganizationsResponse](../../models/operations/usersapilistorganizationsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listWorkspaces

List every workspace the authenticated user is a member of, across all
their organizations, each tagged with the organization it belongs to.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="users_api_list_workspaces" method="get" path="/v1/users/me/workspaces" -->
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral();

async function run() {
  const result = await mistral.beta.users.listWorkspaces({
    dashboardUserContextAuth: process.env["MISTRAL_DASHBOARD_USER_CONTEXT_AUTH"] ?? "",
  }, {
    organizationId: "1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d",
  });

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
import { betaUsersListWorkspaces } from "@mistralai/mistralai/funcs/betaUsersListWorkspaces.js";

// Use `MistralCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mistral = new MistralCore();

async function run() {
  const res = await betaUsersListWorkspaces(mistral, {
    dashboardUserContextAuth: process.env["MISTRAL_DASHBOARD_USER_CONTEXT_AUTH"] ?? "",
  }, {
    organizationId: "1a2b3c4d-5e6f-4a8b-9c0d-1e2f3a4b5c6d",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("betaUsersListWorkspaces failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UsersApiListWorkspacesRequest](../../models/operations/usersapilistworkspacesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.UsersApiListWorkspacesSecurity](../../models/operations/usersapilistworkspacessecurity.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UsersApiListWorkspacesResponse](../../models/operations/usersapilistworkspacesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |