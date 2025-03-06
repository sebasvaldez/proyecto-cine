import { Card, CardMedia } from "@mui/material";
import { useMediaQ } from "../../hooks/useMediaQ";

export const CardImage = ({ movie }) => {
    const { isMovile, isTablet } = useMediaQ();
  return (
    <Card
      sx={{
        maxWidth: isMovile ? "160px" : isTablet ? "300px" : "400px",
        maxHeight: isMovile ? "230" : isTablet ? "430px" : "550px",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        image={movie?.coverUrl}
        alt={movie?.title}
      />
    </Card>
  );
};
