import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { Button, Typography } from "@mui/material";

export const PopperInfo = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <Box
      sx={{
        bgcolor: "#333",
      }}
    >
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        style={{
          color: "white-smoke",
          backgroundColor: "#333",
          border: "none",
          cursor: "pointer",
        }}
      >
        Info
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: "#333" }}>
              <Typography
                variant="p"
                sx={{
                  bgcolor: "#333",
                }}
              >
                Proyecto realizado con React y Material-UI.
                <br />
                Con Ingregracion de React-Router-Dom, Axios, 
                <br />
                Embla-Carousel y Mercado Pago para la compra de entradas
                <br />
              </Typography>
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};
