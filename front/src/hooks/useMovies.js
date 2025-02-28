import { useContext } from "react";
import { MoviesContext } from "../context/moviesContext/MoviesContext";

export const useMovies = () => {
  return useContext(MoviesContext);
};
