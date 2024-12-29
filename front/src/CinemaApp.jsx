import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { Footer, Navbar } from "./components/layout";
import {  Box } from "@mui/material";
import {useMediaQ} from "./hooks/useMediaQ";

export const CinemaApp = () => {

  const {isMovile, isTablet, isDesktop}=useMediaQ();
  
 

  return (
    <Box sx={{ margin: 0, padding: 0, }}>
      <Navbar />

      <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginX: isMovile ? 0 : isTablet || isDesktop ? 4 : 5,
        marginTop:2
      }}
      >
      <AppRouter />

      </Box>
      <Footer />
    </Box>
  );
};
