# HTTP API Ref
https://docs.ipfs.io/reference/http/api/

# JS HTTP API Ref
https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client

# El CORE de la libreria del cliente
https://github.com/ipfs/js-ipfs/tree/master/docs/core-api

# Repo de WEBUI
https://github.com/ipfs-shipyard/ipfs-webui

# Configurar CORS

## Sucia pero rapida
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"*\"]"
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"

## Buena config
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin  '["http://example.com"]'
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST", "GET"]'

# Comandos IPFS

## Para agregar archivos a ipfs docker
cp -r <archivo> <path/de/staging>
docker exec ipfs_host ipfs add -r /export/<archivo>

# Comandos para usar ipfs con el MFS

El contenido añadido con "ipfs add" no se agrega a MFS. Todo contenido tiene que
agregarse al MFS con el comando "ipfs files cp /ipfs/<cid> /otro/path

## Obtener info de un archivo/carpeta
docker exec ipfs_host ipfs files stat <path>

obtenes metadata =>
<cid>
Size: 287619
CumulativeSize: 287751
ChildBlocks: 2
Type: file | directory

## Listar archivos de una carpeta
docker exec ipfs_host ipfs files ls <path>

## Copiar archivos dentro de carpetas
docker exec ipfs_host ipfs files cp /ipfs/<cid> <path/a/carpeta>

# Extras
https://rossbulat.medium.com/ipfs-with-react-loading-ipfs-assets-from-your-distributed-ipfs-gateways-fc601c8307bf