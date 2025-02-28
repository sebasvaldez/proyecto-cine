import { AuthProvider } from "./context/authContext/AuthProvider.jsx";
import { MoviesProvider } from "./context/moviesContext/MoviesProvider.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { CinemaApp } from "./CinemaApp.jsx";

createRoot(document.getElementById("root")).render(
  <MoviesProvider>
    <AuthProvider>
      <Router>
        <CinemaApp />
      </Router>
    </AuthProvider>
  </MoviesProvider>
);
