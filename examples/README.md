# Examples

Below is a guide how to run the examples if you have cloned this repo.

## Prerequisites

- Node.js v18+
- `cp .env.template .env` and fill in the fields corresponding to the examples you want to run.

## Install

- You'll need to run `npm install` in the root of the repository
- You'll need to run `npm install` in `packages/gcp` directory
- You'll need to run `npm install` in `packages/azure` directory
- Finally, you'll need to run `npm install` in this `examples` directory

## Run

```
npm run script -- ./src/chat_streaming.ts
```

## Test

The following will run all `examples` directory:

```
npm run test
```
