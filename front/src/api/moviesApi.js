import { axiosInstance } from "./axios.js";

export const getMoviesRequest = async ()=> axiosInstance.get("/movies");

export const getMovieRequest = async (id)=> axiosInstance.get(`/movies/${id}`);

export const createMovieRequest = async (movie) => axiosInstance.post("/movies", movie);

export const updateMovieRequest = async (id, movie) => axiosInstance.put(`/movies/${id}`, movie);

export const deleteMovierequest = async (id)=> axiosInstance.delete(`/movies/${id}`);