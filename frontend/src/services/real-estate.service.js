import { realEstateApi } from "../libs/axios/http-common.js";

const getRealEstateByFilter = (query) => realEstateApi.get(`/get-real-estate-by-filter?${(!query) ? "" : query}`);

const getRealEstateById = (query) => realEstateApi.get(`/get-real-estate-by-id?${!query ? "" : query}`);

const getOneRealEstate = (query) => realEstateApi.get(`/get-one-real-estate?${(!query) ? "" : query}`);

const addRealEstate = (newRealEstate, userId) => realEstateApi.post("/add-real-estate", {newRealEstate, userId});

const deleteRealEstateById = (realEstateId, userId) => realEstateApi.delete(`/delete-real-estate-by-id/${realEstateId}/${userId}`);

const scrapeRealEstate = (query) => realEstateApi.get(`/scrape-real-estate?${(!query) ? "" : query}`);

const downloadScrapeFile = (query) => realEstateApi.get(`/download-scrape-file?${(!query) ? "" : query}`);

export { getRealEstateByFilter, getRealEstateById, getOneRealEstate, addRealEstate, deleteRealEstateById, scrapeRealEstate, downloadScrapeFile }