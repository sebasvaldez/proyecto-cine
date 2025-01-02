import { useForm } from "../../hooks/useForm";
import { useMediaQ } from "../../hooks/useMediaQ";

import { Button, TextField, FormControl, Box, Typography } from "@mui/material";

export const Login = () => {
  const { isMovile, isTablet } = useMediaQ();
  const {}= useForm()

  return (
    <Box
      sx={{
        padding: isMovile ? "10px" : isTablet ? "20px" : "30px",
        margin: "auto",
        width: isMovile ? "80%" : isTablet ? "60%" : "40%",
        display: "grid",
        minHeight: isMovile ? "60vh" : isTablet ? "100vh" : "80vh",
      }}
    >
      <Typography variant="h6" textAlign={"center"}>
        Ingreso solo a personal autorizado
      </Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          borderRadius: "10px",
          height: "80%",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
          backgroundColor: "rgba(34, 29, 29, 0.8)",
        }}
      >
        <FormControl
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            name="email"
          />
          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            name="password"
          />
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            size={isMovile ? "small" : isTablet ? "medium" : "large"}
            sx={{ marginTop: "40px" }}
          >
            Login
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
