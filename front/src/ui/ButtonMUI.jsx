import { Button } from "@mui/material";
import { useMediaQ } from "../hooks/useMediaQ";

export const ButtonMUI = ({ children, ...props }) => {
  const { isMovile, isTablet } = useMediaQ();
  return (
    <Button
      variant="outlined"
      color="primary"
      fullWidth
      {...props}
      size={isMovile ? "small" : isTablet ? "medium" : "large"}
      sx={{ marginTop: "40px" }}
    >
      {children}
    </Button>
  );
};
