import Movie from "../models/movie.model.js";

export const getMovies = (req, res) => {

  


};
export const getMovie = (req, res) => {
  res.send("Obteniendo la pelicula con id " + req.params.id);
};

export const createMovie = async (req, res) => {
  const {
    title,
    synopsis,
    genre,
    cast,
    director,
    duration,
    coverUrl,
    trailerUrl,
  } = req.body;

  const newMovie = new Movie({
    title,
    synopsis,
    genre,
    cast,
    director,
    duration,
    coverUrl,
    trailerUrl,
  });

  const movieSaved = await newMovie.save();
  res.json(movieSaved);
};

export const updateMovie = (req, res) => {
  res.send("Actualizando la pelicula con id " + req.params.id);
};

export const deleteMovie = (req, res) => {
  res.send("Eliminando la pelicula con id " + req.params.id);
};
