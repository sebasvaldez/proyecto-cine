import { MoviesContext } from "./MoviesContext";
import {
  getMoviesRequest,
  getMovieRequest,
  createMovieRequest,
  updateMovieRequest,
  deleteMovierequest,
} from "../../api/moviesApi";
import { useEffect, useState } from "react";

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
    const [onBillboard, setOnBillboard] = useState([]);
    const [comingSoon, setComingSoon] = useState([]);
    const [loadingMovies, setLoadingMovies] = useState(true);

  const getAllMovies = async () => {
    try {
      const response = await getMoviesRequest();
        setMovies(response.data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoadingMovies(false)
    }
  };
 
  



  useEffect(() => {
    getAllMovies();
   
  }, []);

  useEffect(() => {
    if(movies.length>0){
      setOnBillboard(movies.filter((movie)=> movie.onBillboard === true))
      setComingSoon(movies.filter((movie)=> movie.onBillboard === false))
    }
   
  }, [movies])


 
  return (
    <MoviesContext.Provider value={{ movies,onBillboard,comingSoon,loadingMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};
