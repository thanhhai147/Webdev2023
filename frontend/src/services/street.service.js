import { streetApi } from "../libs/axios/http-common.js";

const getOneStreet = (streetId) => streetApi.get(`/get-one-street?streetId=${streetId}`)

export { getOneStreet };   