import { provinceApi } from "../libs/axios/http-common.js";


const getProvinces = () => provinceApi.get("/p/?depth=2");

const getDistricts = (provinceCode) => provinceApi.get(`/p/${provinceCode}/?depth=2`);

const getWards = (districtCode) => provinceApi.get(`/d/${districtCode}/?depth=2`);

const getOneProvince = (provinceCode) => provinceApi.get(`/p/${provinceCode}`);

const getOneDistrict = (districtCode) => provinceApi.get(`/d/${districtCode}`);

const getOneWard = (wardCode) => provinceApi.get(`/w/${wardCode}`);

const searchProvince = (term) => provinceApi.get(`/p/search/?q=${term}`);

const searchDistrict = (term, provinceCode) => provinceApi.get(`/d/search/?q=${term}&p=${provinceCode}`);

const searchWard = (term, districtCode) => provinceApi.get(`w/search/?q=${term}&d=${districtCode}`);


export { getProvinces, getDistricts, getWards, getOneProvince, getOneDistrict, getOneWard, searchProvince, searchDistrict, searchWard };