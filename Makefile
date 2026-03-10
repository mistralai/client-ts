.PHONY: help generate test-generate lint build test check-config

help:
	@echo "Available targets:"
	@echo "  make generate        Generate all SDKs (main, Azure, GCP)"
	@echo "  make test-generate   Test SDK generation locally"
	@echo "  make lint            Run linting"
	@echo "  make build           Build all SDKs"
	@echo "  make test            Run tests"
	@echo "  make check-config    Check gen.yaml against recommended defaults"
	@echo ""
	@echo "Note: Production SDK generation is done via GitHub Actions:"
	@echo "  .github/workflows/sdk_generation_mistralai_sdk.yaml"

# Generate all SDKs (main, Azure, GCP)
generate:
	speakeasy run -t all

# Test SDK generation locally.
# For production, use GitHub Actions: .github/workflows/sdk_generation_mistralai_sdk.yaml
# This uses the Speakeasy CLI version defined in .speakeasy/workflow.yaml
test-generate:
	speakeasy run --skip-versioning

# Run linting
lint:
	npm run lint

# Build all SDKs
build:
	npm run build
	cd packages/mistralai-azure && npm run build
	cd packages/mistralai-gcp && npm run build

# Run tests
test:
	cd tests && npx jest

# Check gen.yaml configuration against Speakeasy recommended defaults
check-config:
	speakeasy configure generation check
