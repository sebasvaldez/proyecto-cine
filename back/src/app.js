import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import moviesRoutes from "./routes/movies.routes.js";
import { FRONTEND_URL } from "./config.js";

const app = express();

//middlewares
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
  
}))
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => res.json({ message: "Welcome to my API" }));
app.use("/api", authRoutes);
app.use("/api", moviesRoutes);

//error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
