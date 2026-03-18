# Mistral Typescript Client

> **This is v2 of the Mistral TypeScript SDK.**
>
> Key changes from v1: **ESM-only**, shorter type names, forward-compatible enums/unions, Zod v4.
> See the **[Migration Guide](https://github.com/mistralai/client-ts/blob/main/MIGRATION.md)** for full details.
>
> To pin v1: `npm install @mistralai/mistralai@^1` · **[v1 documentation and source](https://github.com/mistralai/client-ts/tree/v1)**

<!-- Start Summary [summary] -->
## Summary

Mistral AI API: Our Chat Completion and Embeddings APIs specification. Create your account on [La Plateforme](https://console.mistral.ai) to get access and read the [docs](https://docs.mistral.ai) to learn how to use it.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Mistral Typescript Client](#mistral-typescript-client)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [API Key Setup](#api-key-setup)
  * [SDK Example Usage](#sdk-example-usage)
  * [Providers' SDKs](#providers-sdks)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Server-sent event streaming](#server-sent-event-streaming)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)
* [Development](#development)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @mistralai/mistralai
```

### PNPM

```bash
pnpm add @mistralai/mistralai
```

### Bun

```bash
bun add @mistralai/mistralai
```

### Yarn

```bash
yarn add @mistralai/mistralai
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("@mistralai/mistralai")` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](https://github.com/mistralai/client-ts/blob/main/RUNTIMES.md).
<!-- End Requirements [requirements] -->

## API Key Setup

Before you begin, you will need a Mistral AI API key.

1. Get your own Mistral API Key: <https://docs.mistral.ai/#api-access>
2. Set your Mistral API Key as an environment variable. You only need to do this once.

```bash
# set Mistral API Key (using zsh for example)
$ echo 'export MISTRAL_API_KEY=[your_key_here]' >> ~/.zshenv

# reload the environment (or just quit and open a new terminal)
$ source ~/.zshenv
```

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Create Chat Completions

This example shows how to create chat completions.

```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.chat.complete({
    model: "mistral-large-latest",
    messages: [
      {
        role: "user",
        content:
          "Who is the best French painter? Answer in one short sentence.",
      },
    ],
    responseFormat: {
      type: "text",
    },
  });

  console.log(result);
}

run();

```

### Upload a file

This example shows how to upload a file.

```typescript
import { Mistral } from "@mistralai/mistralai";
import { openAsBlob } from "node:fs";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.files.upload({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```

### Create Agents Completions

This example shows how to create agents completions.

```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.agents.complete({
    messages: [
      {
        role: "user",
        content:
          "Who is the best French painter? Answer in one short sentence.",
      },
    ],
    responseFormat: {
      type: "text",
    },
    agentId: "<id>",
  });

  console.log(result);
}

run();

```

### Create Embedding Request

This example shows how to create embedding request.

```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.embeddings.create({
    model: "mistral-embed",
    inputs: [
      "Embed this sentence.",
      "As well as this one.",
    ],
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

## Providers' SDKs

We have dedicated SDKs for the following providers:

- [GCP](https://github.com/mistralai/client-ts/tree/main/packages/mistralai-gcp)
- [Azure](https://github.com/mistralai/client-ts/tree/main/packages/mistralai-azure)

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Agents](https://github.com/mistralai/client-ts/blob/main/docs/sdks/agents/README.md)

* [complete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/agents/README.md#complete) - Agents Completion
* [stream](https://github.com/mistralai/client-ts/blob/main/docs/sdks/agents/README.md#stream) - Stream Agents completion

### [Audio.Transcriptions](https://github.com/mistralai/client-ts/blob/main/docs/sdks/transcriptions/README.md)

* [complete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/transcriptions/README.md#complete) - Create Transcription
* [stream](https://github.com/mistralai/client-ts/blob/main/docs/sdks/transcriptions/README.md#stream) - Create Streaming Transcription (SSE)

### [Batch.Jobs](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md)

* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md#list) - Get Batch Jobs
* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md#create) - Create Batch Job
* [get](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md#get) - Get Batch Job
* [cancel](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md#cancel) - Cancel Batch Job

### [Beta.Agents](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md)

* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#create) - Create a agent that can be used within a conversation.
* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#list) - List agent entities.
* [get](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#get) - Retrieve an agent entity.
* [update](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#update) - Update an agent entity.
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#delete) - Delete an agent entity.
* [updateVersion](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#updateversion) - Update an agent version.
* [listVersions](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#listversions) - List all versions of an agent.
* [getVersion](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#getversion) - Retrieve a specific version of an agent.
* [createVersionAlias](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#createversionalias) - Create or update an agent version alias.
* [listVersionAliases](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#listversionaliases) - List all aliases for an agent.
* [deleteVersionAlias](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#deleteversionalias) - Delete an agent version alias.

### [Beta.Connectors](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md)

* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#create) - Create a new connector.
* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#list) - List all connectors.
* [callTool](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#calltool) - Call Connector Tool
* [get](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#get) - Get a connector.
* [update](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#update) - Update a connector.
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#delete) - Delete a connector.

### [Beta.Conversations](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md)

* [start](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#start) - Create a conversation and append entries to it.
* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#list) - List all created conversations.
* [get](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#get) - Retrieve a conversation information.
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#delete) - Delete a conversation.
* [append](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#append) - Append new entries to an existing conversation.
* [getHistory](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#gethistory) - Retrieve all entries in a conversation.
* [getMessages](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#getmessages) - Retrieve all messages in a conversation.
* [restart](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#restart) - Restart a conversation starting from a given entry.
* [startStream](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#startstream) - Create a conversation and append entries to it.
* [appendStream](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#appendstream) - Append new entries to an existing conversation.
* [restartStream](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#restartstream) - Restart a conversation starting from a given entry.

### [Beta.Libraries](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md)

* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#list) - List all libraries you have access to.
* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#create) - Create a new Library.
* [get](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#get) - Detailed information about a specific Library.
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#delete) - Delete a library and all of it's document.
* [update](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#update) - Update a library.

#### [Beta.Libraries.Accesses](https://github.com/mistralai/client-ts/blob/main/docs/sdks/accesses/README.md)

* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/accesses/README.md#list) - List all of the access to this library.
* [updateOrCreate](https://github.com/mistralai/client-ts/blob/main/docs/sdks/accesses/README.md#updateorcreate) - Create or update an access level.
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/accesses/README.md#delete) - Delete an access level.

#### [Beta.Libraries.Documents](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md)

* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#list) - List documents in a given library.
* [upload](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#upload) - Upload a new document.
* [get](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#get) - Retrieve the metadata of a specific document.
* [update](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#update) - Update the metadata of a specific document.
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#delete) - Delete a document.
* [textContent](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#textcontent) - Retrieve the text content of a specific document.
* [status](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#status) - Retrieve the processing status of a specific document.
* [getSignedUrl](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#getsignedurl) - Retrieve the signed URL of a specific document.
* [extractedTextSignedUrl](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#extractedtextsignedurl) - Retrieve the signed URL of text extracted from a given document.
* [reprocess](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#reprocess) - Reprocess a document.

### [Beta.Observability.Campaigns](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md)

* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#create) - Create and start a new campaign
* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#list) - Get all campaigns
* [fetch](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#fetch) - Get campaign by id
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#delete) - Delete a campaign
* [fetchStatus](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#fetchstatus) - Get campaign status by campaign id
* [listEvents](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#listevents) - Get event ids that were selected by the given campaign

### [Beta.Observability.ChatCompletionEvents](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md)

* [search](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#search) - Get Chat Completion Events
* [searchIds](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#searchids) - Alternative to /search that returns only the IDs and that can return many IDs at once
* [fetch](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#fetch) - Get Chat Completion Event
* [fetchSimilarEvents](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#fetchsimilarevents) - Get Similar Chat Completion Events
* [judge](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#judge) - Run Judge on an event based on the given options

#### [Beta.Observability.ChatCompletionEvents.Fields](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fields/README.md)

* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fields/README.md#list) - Get Chat Completion Fields
* [fetchOptions](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fields/README.md#fetchoptions) - Get Chat Completion Field Options
* [fetchOptionCounts](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fields/README.md#fetchoptioncounts) - Get Chat Completion Field Options Counts

### [Beta.Observability.Datasets](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md)

* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#create) - Create a new empty dataset
* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#list) - List existing datasets
* [fetch](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#fetch) - Get dataset by id
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#delete) - Delete a dataset
* [update](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#update) - Patch dataset
* [listRecords](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#listrecords) - List existing records in the dataset
* [createRecord](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#createrecord) - Add a conversation to the dataset
* [importFromCampaign](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromcampaign) - Populate the dataset with a campaign
* [importFromExplorer](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromexplorer) - Populate the dataset with samples from the explorer
* [importFromFile](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromfile) - Populate the dataset with samples from an uploaded file
* [importFromPlayground](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromplayground) - Populate the dataset with samples from the playground
* [importFromDatasetRecords](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromdatasetrecords) - Populate the dataset with samples from another dataset
* [exportToJsonl](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#exporttojsonl) - Export to the Files API and retrieve presigned URL to download the resulting JSONL file
* [fetchTask](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#fetchtask) - Get status of a dataset import task
* [listTasks](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#listtasks) - List import tasks for the given dataset

#### [Beta.Observability.Datasets.Records](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md)

* [fetch](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#fetch) - Get the content of a given conversation from a dataset
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#delete) - Delete a record from a dataset
* [bulkDelete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#bulkdelete) - Delete multiple records from datasets
* [judge](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#judge) - Run Judge on a dataset record based on the given options
* [updatePayload](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#updatepayload) - Update a dataset record conversation payload
* [updateProperties](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#updateproperties) - Update conversation properties

### [Beta.Observability.Judges](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md)

* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#create) - Create a new judge
* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#list) - Get judges with optional filtering and search
* [fetch](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#fetch) - Get judge by id
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#delete) - Delete a judge
* [update](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#update) - Update a judge

### [Chat](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chat/README.md)

* [complete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chat/README.md#complete) - Chat Completion
* [stream](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chat/README.md#stream) - Stream chat completion

### [Classifiers](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md)

* [moderate](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md#moderate) - Moderations
* [moderateChat](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md#moderatechat) - Chat Moderations
* [classify](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md#classify) - Classifications
* [classifyChat](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md#classifychat) - Chat Classifications

### [Embeddings](https://github.com/mistralai/client-ts/blob/main/docs/sdks/embeddings/README.md)

* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/embeddings/README.md#create) - Embeddings

### [Files](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md)

* [upload](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#upload) - Upload File
* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#list) - List Files
* [retrieve](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#retrieve) - Retrieve File
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#delete) - Delete File
* [download](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#download) - Download File
* [getSignedUrl](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#getsignedurl) - Get Signed Url

### [Fim](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fim/README.md)

* [complete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fim/README.md#complete) - Fim Completion
* [stream](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fim/README.md#stream) - Stream fim completion

### [FineTuning.Jobs](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md)

* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#list) - Get Fine Tuning Jobs
* [create](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#create) - Create Fine Tuning Job
* [get](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#get) - Get Fine Tuning Job
* [cancel](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#cancel) - Cancel Fine Tuning Job
* [start](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#start) - Start Fine Tuning Job

### [Models](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md)

* [list](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#list) - List Models
* [retrieve](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#retrieve) - Retrieve Model
* [delete](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#delete) - Delete Model
* [update](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#update) - Update Fine Tuned Model
* [archive](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#archive) - Archive Fine Tuned Model
* [unarchive](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#unarchive) - Unarchive Fine Tuned Model

### [Ocr](https://github.com/mistralai/client-ts/blob/main/docs/sdks/ocr/README.md)

* [process](https://github.com/mistralai/client-ts/blob/main/docs/sdks/ocr/README.md#process) - OCR

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.conversations.startStream({
    inputs: [
      {
        object: "entry",
        type: "agent.handoff",
        previousAgentId: "<id>",
        previousAgentName: "<value>",
        nextAgentId: "<id>",
        nextAgentName: "<value>",
      },
    ],
    completionArgs: {
      responseFormat: {
        type: "text",
      },
    },
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();

```

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Mistral } from "@mistralai/mistralai";
import { openAsBlob } from "node:fs";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.beta.libraries.documents.upload({
    libraryId: "a02150d9-5ee0-4877-b62c-28b1fcdf3b76",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.models.list(undefined, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.models.list();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`MistralError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/mistralerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Mistral } from "@mistralai/mistralai";
import * as errors from "@mistralai/mistralai/models/errors";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  try {
    const result = await mistral.models.list();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.MistralError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.HTTPValidationError) {
        console.log(error.data$.detail); // ValidationError[]
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`MistralError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/mistralerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (8)</summary>

<br />

**Network errors:**
* [`ConnectionError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`MistralError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/mistralerror.ts)**:
* [`HTTPValidationError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/httpvalidationerror.ts): Validation Error. Status code `422`. Applicable to 60 of 121 methods.*
* [`ObservabilityError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/observabilityerror.ts): Bad Request - Invalid request parameters or data. Applicable to 40 of 121 methods.*
* [`ResponseValidationError`](https://github.com/mistralai/client-ts/blob/main/src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server                   | Description          |
| ---- | ------------------------ | -------------------- |
| `eu` | `https://api.mistral.ai` | EU Production server |

#### Example

```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  server: "eu",
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.models.list();

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  serverURL: "https://api.mistral.ai",
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.models.list();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Mistral } from "@mistralai/mistralai";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@mistralai/mistralai/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Mistral({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      | Environment Variable |
| -------- | ---- | ----------- | -------------------- |
| `apiKey` | http | HTTP Bearer | `MISTRAL_API_KEY`    |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Mistral } from "@mistralai/mistralai";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});

async function run() {
  const result = await mistral.models.list();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->


<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](https://github.com/mistralai/client-ts/blob/main/FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`agentsComplete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/agents/README.md#complete) - Agents Completion
- [`agentsStream`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/agents/README.md#stream) - Stream Agents completion
- [`audioTranscriptionsComplete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/transcriptions/README.md#complete) - Create Transcription
- [`audioTranscriptionsStream`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/transcriptions/README.md#stream) - Create Streaming Transcription (SSE)
- [`batchJobsCancel`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md#cancel) - Cancel Batch Job
- [`batchJobsCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md#create) - Create Batch Job
- [`batchJobsGet`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md#get) - Get Batch Job
- [`batchJobsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/batchjobs/README.md#list) - Get Batch Jobs
- [`betaAgentsCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#create) - Create a agent that can be used within a conversation.
- [`betaAgentsCreateVersionAlias`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#createversionalias) - Create or update an agent version alias.
- [`betaAgentsDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#delete) - Delete an agent entity.
- [`betaAgentsDeleteVersionAlias`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#deleteversionalias) - Delete an agent version alias.
- [`betaAgentsGet`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#get) - Retrieve an agent entity.
- [`betaAgentsGetVersion`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#getversion) - Retrieve a specific version of an agent.
- [`betaAgentsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#list) - List agent entities.
- [`betaAgentsListVersionAliases`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#listversionaliases) - List all aliases for an agent.
- [`betaAgentsListVersions`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#listversions) - List all versions of an agent.
- [`betaAgentsUpdate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#update) - Update an agent entity.
- [`betaAgentsUpdateVersion`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/betaagents/README.md#updateversion) - Update an agent version.
- [`betaConnectorsCallTool`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#calltool) - Call Connector Tool
- [`betaConnectorsCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#create) - Create a new connector.
- [`betaConnectorsDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#delete) - Delete a connector.
- [`betaConnectorsGet`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#get) - Get a connector.
- [`betaConnectorsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#list) - List all connectors.
- [`betaConnectorsUpdate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/connectors/README.md#update) - Update a connector.
- [`betaConversationsAppend`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#append) - Append new entries to an existing conversation.
- [`betaConversationsAppendStream`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#appendstream) - Append new entries to an existing conversation.
- [`betaConversationsDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#delete) - Delete a conversation.
- [`betaConversationsGet`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#get) - Retrieve a conversation information.
- [`betaConversationsGetHistory`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#gethistory) - Retrieve all entries in a conversation.
- [`betaConversationsGetMessages`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#getmessages) - Retrieve all messages in a conversation.
- [`betaConversationsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#list) - List all created conversations.
- [`betaConversationsRestart`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#restart) - Restart a conversation starting from a given entry.
- [`betaConversationsRestartStream`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#restartstream) - Restart a conversation starting from a given entry.
- [`betaConversationsStart`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#start) - Create a conversation and append entries to it.
- [`betaConversationsStartStream`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/conversations/README.md#startstream) - Create a conversation and append entries to it.
- [`betaLibrariesAccessesDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/accesses/README.md#delete) - Delete an access level.
- [`betaLibrariesAccessesList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/accesses/README.md#list) - List all of the access to this library.
- [`betaLibrariesAccessesUpdateOrCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/accesses/README.md#updateorcreate) - Create or update an access level.
- [`betaLibrariesCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#create) - Create a new Library.
- [`betaLibrariesDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#delete) - Delete a library and all of it's document.
- [`betaLibrariesDocumentsDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#delete) - Delete a document.
- [`betaLibrariesDocumentsExtractedTextSignedUrl`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#extractedtextsignedurl) - Retrieve the signed URL of text extracted from a given document.
- [`betaLibrariesDocumentsGet`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#get) - Retrieve the metadata of a specific document.
- [`betaLibrariesDocumentsGetSignedUrl`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#getsignedurl) - Retrieve the signed URL of a specific document.
- [`betaLibrariesDocumentsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#list) - List documents in a given library.
- [`betaLibrariesDocumentsReprocess`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#reprocess) - Reprocess a document.
- [`betaLibrariesDocumentsStatus`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#status) - Retrieve the processing status of a specific document.
- [`betaLibrariesDocumentsTextContent`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#textcontent) - Retrieve the text content of a specific document.
- [`betaLibrariesDocumentsUpdate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#update) - Update the metadata of a specific document.
- [`betaLibrariesDocumentsUpload`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/documents/README.md#upload) - Upload a new document.
- [`betaLibrariesGet`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#get) - Detailed information about a specific Library.
- [`betaLibrariesList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#list) - List all libraries you have access to.
- [`betaLibrariesUpdate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/libraries/README.md#update) - Update a library.
- [`betaObservabilityCampaignsCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#create) - Create and start a new campaign
- [`betaObservabilityCampaignsDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#delete) - Delete a campaign
- [`betaObservabilityCampaignsFetch`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#fetch) - Get campaign by id
- [`betaObservabilityCampaignsFetchStatus`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#fetchstatus) - Get campaign status by campaign id
- [`betaObservabilityCampaignsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#list) - Get all campaigns
- [`betaObservabilityCampaignsListEvents`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/campaigns/README.md#listevents) - Get event ids that were selected by the given campaign
- [`betaObservabilityChatCompletionEventsFetch`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#fetch) - Get Chat Completion Event
- [`betaObservabilityChatCompletionEventsFetchSimilarEvents`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#fetchsimilarevents) - Get Similar Chat Completion Events
- [`betaObservabilityChatCompletionEventsFieldsFetchOptionCounts`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fields/README.md#fetchoptioncounts) - Get Chat Completion Field Options Counts
- [`betaObservabilityChatCompletionEventsFieldsFetchOptions`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fields/README.md#fetchoptions) - Get Chat Completion Field Options
- [`betaObservabilityChatCompletionEventsFieldsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fields/README.md#list) - Get Chat Completion Fields
- [`betaObservabilityChatCompletionEventsJudge`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#judge) - Run Judge on an event based on the given options
- [`betaObservabilityChatCompletionEventsSearch`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#search) - Get Chat Completion Events
- [`betaObservabilityChatCompletionEventsSearchIds`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chatcompletionevents/README.md#searchids) - Alternative to /search that returns only the IDs and that can return many IDs at once
- [`betaObservabilityDatasetsCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#create) - Create a new empty dataset
- [`betaObservabilityDatasetsCreateRecord`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#createrecord) - Add a conversation to the dataset
- [`betaObservabilityDatasetsDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#delete) - Delete a dataset
- [`betaObservabilityDatasetsExportToJsonl`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#exporttojsonl) - Export to the Files API and retrieve presigned URL to download the resulting JSONL file
- [`betaObservabilityDatasetsFetch`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#fetch) - Get dataset by id
- [`betaObservabilityDatasetsFetchTask`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#fetchtask) - Get status of a dataset import task
- [`betaObservabilityDatasetsImportFromCampaign`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromcampaign) - Populate the dataset with a campaign
- [`betaObservabilityDatasetsImportFromDatasetRecords`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromdatasetrecords) - Populate the dataset with samples from another dataset
- [`betaObservabilityDatasetsImportFromExplorer`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromexplorer) - Populate the dataset with samples from the explorer
- [`betaObservabilityDatasetsImportFromFile`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromfile) - Populate the dataset with samples from an uploaded file
- [`betaObservabilityDatasetsImportFromPlayground`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#importfromplayground) - Populate the dataset with samples from the playground
- [`betaObservabilityDatasetsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#list) - List existing datasets
- [`betaObservabilityDatasetsListRecords`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#listrecords) - List existing records in the dataset
- [`betaObservabilityDatasetsListTasks`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#listtasks) - List import tasks for the given dataset
- [`betaObservabilityDatasetsRecordsBulkDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#bulkdelete) - Delete multiple records from datasets
- [`betaObservabilityDatasetsRecordsDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#delete) - Delete a record from a dataset
- [`betaObservabilityDatasetsRecordsFetch`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#fetch) - Get the content of a given conversation from a dataset
- [`betaObservabilityDatasetsRecordsJudge`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#judge) - Run Judge on a dataset record based on the given options
- [`betaObservabilityDatasetsRecordsUpdatePayload`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#updatepayload) - Update a dataset record conversation payload
- [`betaObservabilityDatasetsRecordsUpdateProperties`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/records/README.md#updateproperties) - Update conversation properties
- [`betaObservabilityDatasetsUpdate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/datasets/README.md#update) - Patch dataset
- [`betaObservabilityJudgesCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#create) - Create a new judge
- [`betaObservabilityJudgesDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#delete) - Delete a judge
- [`betaObservabilityJudgesFetch`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#fetch) - Get judge by id
- [`betaObservabilityJudgesList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#list) - Get judges with optional filtering and search
- [`betaObservabilityJudgesUpdate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/judges/README.md#update) - Update a judge
- [`chatComplete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chat/README.md#complete) - Chat Completion
- [`chatStream`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/chat/README.md#stream) - Stream chat completion
- [`classifiersClassify`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md#classify) - Classifications
- [`classifiersClassifyChat`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md#classifychat) - Chat Classifications
- [`classifiersModerate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md#moderate) - Moderations
- [`classifiersModerateChat`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/classifiers/README.md#moderatechat) - Chat Moderations
- [`embeddingsCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/embeddings/README.md#create) - Embeddings
- [`filesDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#delete) - Delete File
- [`filesDownload`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#download) - Download File
- [`filesGetSignedUrl`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#getsignedurl) - Get Signed Url
- [`filesList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#list) - List Files
- [`filesRetrieve`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#retrieve) - Retrieve File
- [`filesUpload`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/files/README.md#upload) - Upload File
- [`fimComplete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fim/README.md#complete) - Fim Completion
- [`fimStream`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/fim/README.md#stream) - Stream fim completion
- [`fineTuningJobsCancel`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#cancel) - Cancel Fine Tuning Job
- [`fineTuningJobsCreate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#create) - Create Fine Tuning Job
- [`fineTuningJobsGet`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#get) - Get Fine Tuning Job
- [`fineTuningJobsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#list) - Get Fine Tuning Jobs
- [`fineTuningJobsStart`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/finetuningjobs/README.md#start) - Start Fine Tuning Job
- [`modelsArchive`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#archive) - Archive Fine Tuned Model
- [`modelsDelete`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#delete) - Delete Model
- [`modelsList`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#list) - List Models
- [`modelsRetrieve`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#retrieve) - Retrieve Model
- [`modelsUnarchive`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#unarchive) - Unarchive Fine Tuned Model
- [`modelsUpdate`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/models/README.md#update) - Update Fine Tuned Model
- [`ocrProcess`](https://github.com/mistralai/client-ts/blob/main/docs/sdks/ocr/README.md#process) - OCR

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Mistral } from "@mistralai/mistralai";

const sdk = new Mistral({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `MISTRAL_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

