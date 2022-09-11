# `ts-app-esm-template`

A template for a web app written in TypeScript using ESM

> This is still a WIP

## Setup

```
yarn install
```

## Build

```
yarn build
```

in development, you can use the `--watch` mode of `tsc`:

```
yarn build:watch
```

## API

Run the API server:

```
yarn api:start
```

Note: the API server does not refresh on change.

## Client

Run the development server (requires the API to be running):

```
yarn client:dev
```

Note: the client server refreshes on change.
