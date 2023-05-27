import axios from "axios";


const authApi = axios.create({
    baseURL: "http://localhost:5000/api/v1/auth",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
});

const userApi = axios.create({
    baseURL: "http://localhost:5000/api/v1/user",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
});

const realEstateApi = axios.create({
    baseURL: "http://localhost:5000/api/v1/real-estate",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
});

const provinceApi = axios.create({
    baseURL: "https://provinces.open-api.vn/api",
    headers: {
        "Content-type": "application/json",
    },
});

const locationApi = axios.create({
    baseURL: "http://localhost:5000/api/v1/location",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
})

const streetApi = axios.create({
    baseURL: "http://localhost:5000/api/v1/street",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
})

const transportApi = axios.create({
    baseURL: "http://localhost:5000/api/v1/transport",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
})

const tourApi = axios.create({
    baseURL: "https://localhost:5000/api/v1/tour",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
})

const fashionApi = axios.create({
    baseURL: "https://localhost:5000/api/v1/fashion",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
})

export { authApi,  userApi, realEstateApi, provinceApi, locationApi, tourApi, fashionApi, streetApi, transportApi};

