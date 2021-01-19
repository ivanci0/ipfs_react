# IPFS React App Example

Example App to use with IPFS

## Install

```sh
git clone git@github.com:ivanci0/ipfs_react.git
cd ipfs_react
yarn install
```

## Usage

### Configure IPFS API CORS headers

You must configure your IPFS API at http://127.0.0.1:5001  to allow [cross-origin (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) requests from your dev server at http://localhost:3000

#### Dirty way

```sh
docker exec ipfs_host ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"
docker exec ipfs_host ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"
```

#### Good way
```sh
docker exec ipfs_host ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://localhost:3000", "https://webui.ipfs.io", "http://127.0.0.1:5001"]'
docker exec ipfs_host ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["POST"]'
```

#### Reverting

To reset your config back to the default configuration, run the following command.

```sh
docker exec ipfs_host ipfs config --json API.HTTPHeaders {}
```

### Add files to IPFS

```sh
cp -r <archivo> <path/de/staging>
docker exec ipfs_host ipfs add -r /export/<archivo>
```

---> Copy CID to 'record' const on ipfs_react/src/App.js

### Start App

```sh
yarn start
```

### Usefull links

#### HTTP API Ref
https://docs.ipfs.io/reference/http/api/

#### JS HTTP API
https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client

#### Core API
https://github.com/ipfs/js-ipfs/tree/master/docs/core-api

#### WEBUI
https://github.com/ipfs-shipyard/ipfs-webui