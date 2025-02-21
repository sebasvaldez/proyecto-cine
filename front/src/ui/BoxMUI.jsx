import { Box } from "@mui/material";
import { useMediaQ } from "../hooks/useMediaQ";

export const BoxMUI = ({ children }) => {
  const { isMovile, isTablet } = useMediaQ();
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
      {children}
    </Box>
  );
};
