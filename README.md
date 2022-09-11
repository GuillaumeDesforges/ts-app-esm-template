# `ts-app-esm-template`

A template for a web app written in TypeScript using ESM

This demonstration uses [remult](https://remult.dev/) to have a shared model which can be used by an API server for CRUD and a react app as a fetch client.

```
.
├── api         # api server
│   └── src
├── client      # react app
│   ├── public
│   └── src
└── shared      # remult model & shared utils
    └── src
```

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
