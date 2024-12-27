import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material/";

import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  return (
    <Box sx={{}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Proyecto cine
            </Link>
          </Typography>
          <Link
          to={"/login"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
