import { transportApi } from "../libs/axios/http-common.js";

const getOneTransport = (transportId) => transportApi.get(`/get-one-transport?transportId=${transportId}`)

export { getOneTransport };     