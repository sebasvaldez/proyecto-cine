import { AuthProvider } from "./context/authContext/AuthProvider.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { CinemaApp } from "./CinemaApp.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      <CinemaApp />
    </Router>
  </AuthProvider>
);
