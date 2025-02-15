import { Router } from "express";
import { login, logOut, profile } from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", login);

router.post("/logout", logOut);

router.get("/profile", profile);

export default router;
