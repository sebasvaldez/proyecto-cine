import { axiosInstance } from "./axios.js";

export const loginRequest = async (email, password )=> axiosInstance.post("/login", { email, password });

export const logoutRequest = async ()=>axiosInstance.post("/logout");
