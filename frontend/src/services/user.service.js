import { userApi } from "../libs/axios/http-common.js";

// find recommended tour
const recommendTour = (query) => userApi.get(`/recommend-tour?${!query ? "" : query}`)
// get all tours
const getAllTours = () => userApi.get("/get-all-tours")

export { recommendTour, getAllTours }