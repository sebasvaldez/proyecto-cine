import { useMediaQ } from "../../hooks/useMediaQ";

import { Button, TextField, FormControl, Box } from "@mui/material";

export const Login = () => {
  const { isMovile, isTablet, isDesktop } = useMediaQ();

  return (
    <Box
      sx={{
        padding: isMovile ? "10px" : isTablet ? "20px" : "30px",
        margin: "auto",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#c5c9cd",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <FormControl
          sx={{
            bgcolor: "#c5c9cd",
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
          >
            Login
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
