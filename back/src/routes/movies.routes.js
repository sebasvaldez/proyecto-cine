import { Router } from "express";
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movies.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/movies",isAuth, getMovies);

router.get("/movies/:id", isAuth, getMovie);

router.post("/movies", isAuth, createMovie);

router.put("/movies/:id", isAuth, updateMovie);

router.delete("/movies/:id", isAuth, deleteMovie);

export default router;
