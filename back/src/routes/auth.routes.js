import { Router } from "express";
import {
  login,
  logOut,
  register,
  profile,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", login);

router.post("/logout", logOut);

router.post("/register", register);

router.get("/profile",isAuth, profile);

export default router;
