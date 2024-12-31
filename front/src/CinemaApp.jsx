import React, { useState, useMemo } from "react";
import { AppRouter } from "./routes/AppRouter";
import { Footer, Navbar } from "./components/layout";
import { Box, CssBaseline } from "@mui/material";
import { useMediaQ } from "./hooks/useMediaQ";
import { darkTheme } from "./theme/theme";
import {ThemeProvider} from "@mui/material/styles"

export const CinemaApp = () => {

  const [darkMode, setDarkMode] = useState(true)

  const theme = useMemo(()=>darkTheme(darkMode), [darkMode])
  
  const { isMovile, isTablet, isDesktop } = useMediaQ();

  console.log(darkMode)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
   
    
      <Navbar toggleDarkMode={()=>setDarkMode(!darkMode)} darkMode={darkMode}/>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginX: isMovile ? 0 : isTablet || isDesktop ? 4 : 5,
          marginTop: 2,
        }}
      >
        <AppRouter />
      </Box>
      <Footer />
    
    </ThemeProvider>
  );
};
