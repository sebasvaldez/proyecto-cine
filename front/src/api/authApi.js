import { axiosInstance } from "./axios.js";

export const loginRequest = async (Email, password )=> axiosInstance.post("/login", { Email, password });
