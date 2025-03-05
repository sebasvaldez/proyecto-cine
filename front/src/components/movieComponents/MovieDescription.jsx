import { Grid2, Typography } from "@mui/material";
import { useMediaQ } from "../../hooks/useMediaQ";

export const MovieDescription = ({ movie }) => {
  const { isMovile } = useMediaQ();
  return (
    <Grid2
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        width: "100%",
        textAlign: "start",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: isMovile ? "center" : "start",
          fontWeight: "bolder",
        }}
      >
        {movie?.title}
      </Typography>
      <Typography>
        <Typography variant="span" sx={{ color: "gray", fontWeight: "bold" }}>
          Género:
        </Typography>

        {movie?.genre.map((genre) => genre + ", ")}
      </Typography>

      <Typography>
        <Typography variant="span" sx={{ color: "gray", fontWeight: "bold" }}>
          Reparto:
        </Typography>
        {movie?.cast.map((actor) => actor + ", ")}
      </Typography>
      <Typography>
        <Typography variant="span" sx={{ color: "gray", fontWeight: "bold" }}>
          Duración:
        </Typography>
        {movie?.duration} minutos.
      </Typography>
      <Typography>
        <Typography variant="span" sx={{ color: "gray", fontWeight: "bold" }}>
          Director:
        </Typography>
        {movie?.director}
      </Typography>
    </Grid2>
  );
};
