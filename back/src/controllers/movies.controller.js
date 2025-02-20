import { json } from "express";
import Movie from "../models/movie.model.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate("user","name email");
    if (!movies) return res.status(404).json({ message: "No hay peliculas" });
    res.json(movies);
  } catch (error) {
    res.status(500), json({ message: error.message });
  }
};
export const getMovie = async (req, res) => {
  const id = req.params.id;
  try {
    const movie = await Movie.findById(id).populate("user","name email");
    if (!movie)
      return res.status(404).json({ message: "Pelicula no encontrada" });
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
    user: req.userId,
  });

  const movieSaved = await newMovie.save();
  res.json(movieSaved);
};

export const deleteMovie = async (req, res) => {
  const id = await req.params.id;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      res.status(404).json({ message: "Pelicula no encontrada" });
    }
    res.json({ message: "Pelicula eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMovie)
      return res.status(404).json({ message: "Pelicula no encontrada" });
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
