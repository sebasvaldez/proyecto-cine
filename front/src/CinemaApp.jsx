import React, { useState, useMemo, useEffect } from "react";
import { AppRouter } from "./routes/AppRouter";
import { Footer, Navbar } from "./components/layout";
import { Box, CssBaseline } from "@mui/material";
import { useMediaQ } from "./hooks/useMediaQ";
import { darkTheme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useAuth } from "./hooks/useAuth";

export const CinemaApp = () => {
  const { darkMode } = useAuth();

  const theme = useMemo(() => darkTheme(darkMode), [darkMode]);

  const { isMovile, isTablet, isDesktop } = useMediaQ();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "100dvh",
        }}
      >
        <Navbar />

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
      </Box>
    </ThemeProvider>
  );
};
