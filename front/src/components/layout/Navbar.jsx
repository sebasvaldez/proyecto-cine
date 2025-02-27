import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material/";
import { SwitchDarkMode } from "./SwitchDarkMode";
import { useAuth } from "../../hooks/useAuth";
import { ButtonMUI } from "../../ui";


export const Navbar = () => {


  const {darkMode, setDarkMode} = useAuth();

  const toggleDarkMode= ()=> setDarkMode(!darkMode)


  return (
    <Box sx={{ bgcolor: "#020c14" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Proyecto cine
            </Link>
          </Typography>

          <SwitchDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
         
        </Toolbar>
      </AppBar>
    </Box>
  );
};
