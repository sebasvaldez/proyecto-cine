import { createTheme, ThemeProvider } from "@mui/material/styles";


export const darkTheme = (darkMode)=> createTheme({
  palette: {
    mode: darkMode ? "dark" : "light",

    primary: {
      main: "#4caf50", //green
    },
    secondary: {
      main: "#ff5722", //orange
    },
    background: {
      default: darkMode ? "#121212" : "#f5f5f5",
      paper: darkMode ? "#1e1e1e" : "#fff", //background color of the paper
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: darkMode ? "#333" : "#ff5722",
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  },
});
