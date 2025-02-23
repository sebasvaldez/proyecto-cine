import { Router } from "express";
import {
  login,
  logOut,
  register,
  profile,
} from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
const router = Router();

router.post("/login",validateSchema(loginSchema), login);

router.post("/logout", logOut);

router.post("/register",validateSchema(registerSchema), register);

router.get("/profile",isAuth, profile);

router.get("/verify", )

export default router;
