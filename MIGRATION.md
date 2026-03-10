# Migration Guide

This guide covers migrating between major versions of the Mistral TypeScript SDK.

---

## Migrating from v1.x to v2.x

Version 2.0 introduces shorter type names, forward-compatible enums/unions, and aligns with the v2 OpenAPI specification.

### Type Renames

Many generated types have been renamed for consistency and clarity. The v2 OpenAPI spec uses `x-speakeasy-name-override` for shorter, more intuitive names.

**Pattern:**
- **Requests**: `{Verb}{Entity}Request` (e.g., `CreateAgentRequest`)
- **Responses**: `{Verb}{Entity}Response` (e.g., `ArchiveModelResponse`)
- **Entities**: `{Entity}` without suffix (e.g., `BatchJob`)

**Examples:**

| v1 Name | v2 Name |
|---------|---------|
| `AgentCreationRequest` | `CreateAgentRequest` |
| `AgentUpdateRequest` | `UpdateAgentRequest` |
| `BatchJobOut` | `BatchJob` |
| `BatchJobsOut` | `ListBatchJobsResponse` |
| `BatchJobIn` | `CreateBatchJobRequest` |
| `ArchiveFTModelOut` | `ArchiveModelResponse` |
| `UnarchiveFTModelOut` | `UnarchiveModelResponse` |
| `DeleteModelOut` | `DeleteModelResponse` |
| `LibraryOut` | `Library` |
| `LibraryIn` | `CreateLibraryRequest` |
| `ConnectorOut` | `Connector` |
| `ConnectorIn` | `CreateConnectorRequest` |
| `JobOut` | `FineTuneJob` |
| `JobIn` | `CreateFineTuneJobRequest` |
| `JobsOut` | `ListFineTuneJobsResponse` |

### Forward-Compatible Enums

Enums now accept unknown values without throwing errors. When the API adds new enum values, your code will no longer break.

```typescript
// v1: Unknown enum values throw validation errors
// v2: Unknown values are accepted gracefully
```

### Forward-Compatible Unions

Discriminated unions now include handling for unrecognized variants, preventing crashes when the API introduces new types.

### What Stays the Same

- The `Mistral` client API is unchanged
- All method signatures work the same way
- Import paths remain the same (`@mistralai/mistralai`)

### Version Support

| Branch | Version | Publishing |
|--------|---------|-----------|
| `v1` | 1.x maintenance | Auto-publish on RELEASES.md change |
| `main` | 2.x development | Manual dispatch only |

For v1 maintenance, use the `v1` branch.
