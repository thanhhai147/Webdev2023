import { locationApi } from "../libs/axios/http-common.js";

const getOneLocation = (locationId) => locationApi.get(`/get-one-location?locationId=${locationId}`)
const getMultipleLocations = (region) => locationApi.get(`/get-multiple-locations?region=${region}`)
const getAllLocations = () => locationApi.get("/get-all-locations")

export { getOneLocation, getMultipleLocations, getAllLocations };   