import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { CinemaApp } from "./CinemaApp.jsx";

createRoot(document.getElementById("root")).render(
    
  <Router>
    <CinemaApp />
  </Router>
);
