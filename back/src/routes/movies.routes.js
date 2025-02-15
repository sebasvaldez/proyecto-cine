import { Router } from "express";
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies.controllers.js";

const router = Router();

router.get("/movies", getMovies);

router.get("/movies/:id", getMovie);

router.post("/movies", createMovie);

router.put("/movies/:id", updateMovie);

router.delete("/movies/:id", deleteMovie);

export default router;
