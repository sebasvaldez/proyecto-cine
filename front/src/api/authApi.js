import { axiosInstance } from "./axios.js";

export const loginRequest = async (email, password )=> axiosInstance.post("/login", { email, password }, { withCredentials: true });

export const logoutRequest = async ()=>axiosInstance.post("/logout");

export const verifyTokenRequest = async ()=>axiosInstance.get("/verify", { withCredentials: true });

export const profileRequest = async ()=>axiosInstance.get("/profile");
