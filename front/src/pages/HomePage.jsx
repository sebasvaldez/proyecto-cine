import { Box, Typography } from "@mui/material";
import { MainCarousel } from "../components/layout/emblaCarousel/MainCarousel";
import { MovieCard } from "../components/layout/MovieCard";
import { useMediaQ } from "../hooks/useMediaQ";
import gladiador from "../assets/front-page/gladiador.jpg";
import proximoEstreno from "../assets/front-page/proximoEstreno.jpg";

export const HomePage = () => {
  const { isMovile, isTablet } = useMediaQ();

  return (
    <Box>
      <MainCarousel />

      <Typography
        variant="h4"
        sx={{
          color: "#808080",
          textAlign: isMovile ? "center" : "start",
          marginTop: 2,
        }}
      >
        Peliculas en cartelera
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMovile
            ? "repeat(2, 1fr)"
            : isTablet
            ? "repeat(3, 1fr)"
            : "repeat(4, 1fr)",
          gap: 2,
          alignItems: "center",
          width: "90%",
          margin: "auto",
          marginTop: 2,
          justifyContent: "space-between",
        }}
      >
        <MovieCard image={gladiador} />
        <MovieCard image={gladiador} />
        <MovieCard image={gladiador} />
        <MovieCard image={gladiador} />
      </Box>

      <Typography
        variant="h4"
        sx={{
          color: "#808080",
          textAlign: isMovile ? "center" : "start",
          marginTop: 2,
        }}
      >
        Proximamente
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isMovile
            ? "repeat(2, 1fr)"
            : isTablet
            ? "repeat(3, 1fr)"
            : "repeat(4, 1fr)",
          gap: 2,
          alignItems: "center",
          width: "90%",
          margin: "auto",
          marginTop: 2,
        }}
      >
        <MovieCard image={proximoEstreno} />
        <MovieCard image={proximoEstreno} />
        <MovieCard image={proximoEstreno} />
        <MovieCard image={proximoEstreno} />
      </Box>
    </Box>
  );
};
