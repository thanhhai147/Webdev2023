import { authApi } from "../libs/axios/http-common.js";

const signup = (newUser) => authApi.post("/signup", { "newUser": newUser });
const login = (user) => authApi.post("/login", { "user": user });
const logout = () =>  authApi.post("/logout");
const getUser = () =>  authApi.get("/get-user");
const refreshTokens = () => authApi.post("/refresh-tokens");

export { signup, login, logout, getUser, refreshTokens };   