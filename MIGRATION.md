# Migration Guide: v1.x → v2.x

Version 2.0 of the Mistral TypeScript SDK is a major update that switches to ESM, adopts the v2 OpenAPI specification with shorter type names, and introduces forward-compatible enums and unions.

---

## ESM Only

The SDK is now published as an **ES Module**. CommonJS `require()` is no longer supported.

```typescript
// v1: CommonJS worked
const { Mistral } = require("@mistralai/mistralai");

// v2: ESM only
import { Mistral } from "@mistralai/mistralai";

// v2: If you must use CommonJS, use dynamic import
const { Mistral } = await import("@mistralai/mistralai");
```

Make sure your `tsconfig.json` uses `"module": "node16"` (or `"nodenext"`) and your `package.json` has `"type": "module"`.

## GCP SDK Rename

The GCP package class has been renamed to align with the Python SDK: `MistralGoogleCloud` → `MistralGCP`, `MistralGoogleCloudError` → `MistralGCPError`.

## Type Renames

Many types have been renamed for consistency. The v2 OpenAPI spec uses shorter, more intuitive names.

**Pattern:**
- **Requests**: `{Verb}{Entity}Request` (e.g., `CreateAgentRequest`)
- **Responses**: `{Verb}{Entity}Response` (e.g., `ArchiveModelResponse`)
- **Entities**: `{Entity}` without suffix (e.g., `BatchJob`)

**Common examples:**

| v1 Name | v2 Name |
|---------|---------|
| `AgentCreationRequest` | `CreateAgentRequest` |
| `AgentUpdateRequest` | `UpdateAgentRequest` |
| `BatchJobOut` | `BatchJob` |
| `BatchJobIn` | `CreateBatchJobRequest` |
| `BatchJobsOut` | `ListBatchJobsResponse` |
| `ArchiveFTModelOut` | `ArchiveModelResponse` |
| `UnarchiveFTModelOut` | `UnarchiveModelResponse` |
| `DeleteModelOut` | `DeleteModelResponse` |
| `LibraryOut` | `Library` |
| `LibraryIn` | `CreateLibraryRequest` |
| `JobIn` | `CreateFineTuningJobRequest` |
| `JobsOut` | `ListFineTuningJobsResponse` |

<details>
<summary>Full rename table</summary>

| v1 Name | v2 Name |
|---------|---------|
| `AgentCreationRequest` | `CreateAgentRequest` |
| `AgentUpdateRequest` | `UpdateAgentRequest` |
| `ArchiveFTModelOut` | `ArchiveModelResponse` |
| `BatchJobIn` | `CreateBatchJobRequest` |
| `BatchJobOut` | `BatchJob` |
| `BatchJobsOut` | `ListBatchJobsResponse` |
| `CheckpointOut` | `Checkpoint` |
| `ClassifierDetailedJobOut` | `ClassifierFineTuningJobDetails` |
| `ClassifierFTModelOut` | `ClassifierFineTunedModel` |
| `ClassifierJobOut` | `ClassifierFineTuningJob` |
| `ClassifierTargetIn` | `ClassifierTarget` |
| `ClassifierTargetOut` | `ClassifierTargetResult` |
| `ClassifierTrainingParametersIn` | `ClassifierTrainingParameters` |
| `CompletionDetailedJobOut` | `CompletionFineTuningJobDetails` |
| `CompletionFTModelOut` | `CompletionFineTunedModel` |
| `CompletionJobOut` | `CompletionFineTuningJob` |
| `CompletionTrainingParametersIn` | `CompletionTrainingParameters` |
| `DeleteFileOut` | `DeleteFileResponse` |
| `DeleteModelOut` | `DeleteModelResponse` |
| `DocumentOut` | `Document` |
| `DocumentUpdateIn` | `UpdateDocumentRequest` |
| `EventOut` | `Event` |
| `FileSignedURL` | `GetSignedUrlResponse` |
| `FTModelCapabilitiesOut` | `FineTunedModelCapabilities` |
| `GithubRepositoryIn` | `CreateGithubRepositoryRequest` |
| `GithubRepositoryOut` | `GithubRepository` |
| `JobIn` | `CreateFineTuningJobRequest` |
| `JobMetadataOut` | `JobMetadata` |
| `JobsOut` | `ListFineTuningJobsResponse` |
| `LegacyJobMetadataOut` | `LegacyJobMetadata` |
| `LibraryIn` | `CreateLibraryRequest` |
| `LibraryInUpdate` | `UpdateLibraryRequest` |
| `LibraryOut` | `Library` |
| `ListDocumentOut` | `ListDocumentsResponse` |
| `ListFilesOut` | `ListFilesResponse` |
| `ListLibraryOut` | `ListLibrariesResponse` |
| `ListSharingOut` | `ListSharingResponse` |
| `MetricOut` | `Metric` |
| `ProcessingStatusOut` | `ProcessingStatus` |
| `RetrieveFileOut` | `GetFileResponse` |
| `SharingIn` | `SharingRequest` |
| `SharingOut` | `Sharing` |
| `UnarchiveFTModelOut` | `UnarchiveModelResponse` |
| `UpdateFTModelIn` | `UpdateModelRequest` |
| `UploadFileOut` | `CreateFileResponse` |
| `WandbIntegrationOut` | `WandbIntegrationResult` |

</details>

## Forward-Compatible Enums

Enums now accept unknown values without throwing errors. When the API adds new enum values, your code will no longer crash at runtime.

```typescript
// v1: Unknown enum values throw Zod validation errors
// v2: Unknown values are accepted and passed through as strings
const status = response.status; // "NEW_STATUS" — no error
```

## Forward-Compatible Discriminated Unions

Discriminated unions now handle unrecognized variants gracefully. When the API introduces new types, they are returned as an `Unknown` variant instead of throwing.

```typescript
import { isUnknown } from "@mistralai/mistralai/types/discriminatedUnion.js";

const chunk = response.content[0];
if (isUnknown(chunk)) {
  // New content type from the API — access raw payload via chunk.raw
  console.log(chunk.raw);
} else if (chunk.type === "text") {
  console.log(chunk.text);
}
```

## Additional Properties

Models with `additionalProperties: true` now use an index signature directly on the object instead of a nested `.additionalProperties` field.

```typescript
// v1: Extra properties nested
response.usage.additionalProperties?.["cached_tokens"];

// v2: Extra properties accessed directly
(response.usage as Record<string, unknown>)["cached_tokens"];
```

## Zod v4

The SDK now uses Zod v4. If you import Zod schemas from the SDK (e.g., `ChatCompletionResponse$inboundSchema`) or use `chat.parse()` with Zod objects, you are working with Zod v4 schemas. See the [Zod v4 migration guide](https://zod.dev/v4/changelog) for API differences from v3.

## Version Support

| Branch | Version | npm Tag |
|--------|---------|---------|
| `main` | 2.x | `latest` |
| `v1` | 1.x (maintenance) | `v1` |

To pin to v1:
```bash
npm install @mistralai/mistralai@^1
```
