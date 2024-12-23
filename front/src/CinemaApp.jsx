import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { Navbar } from "./components/layout";
import { Container,Box } from "@mui/material";


export const CinemaApp = () => {
  return (
    <Box
      sx={{margin:0, padding:0}}
    >
      <Navbar />
    <AppRouter />
    </Box>
  );
};
