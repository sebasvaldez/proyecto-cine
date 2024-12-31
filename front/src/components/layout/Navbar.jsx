import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material/";


export const Navbar = ({toggleDarkMode, darkMode}) => {
  return (
    <Box sx={{ bgcolor: "#020c14" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Proyecto cine
            </Link>
          </Typography>
          {/* <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </Link> */}
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>  
        </Toolbar>
      </AppBar>
    </Box>
  );
};
