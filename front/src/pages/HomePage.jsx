import { Box, Typography } from "@mui/material";
import { MainCarousel } from "../components/layout/emblaCarousel/MainCarousel";
import { MovieCard } from "../components/layout/MovieCard";
import { useMediaQ } from "../hooks/useMediaQ";
import gladiador from "../assets/front-page/gladiador.jpg";
import proximoEstreno from "../assets/front-page/proximoEstreno.jpg";
import { useMovies } from "../hooks/useMovies";
import { useEffect } from "react";

export const HomePage = () => {
  const { isMovile, isTablet } = useMediaQ();
  const { onBillboard, comingSoon, loadingMovies } = useMovies();

  console.log(onBillboard);
  console.log(comingSoon);

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
        {loadingMovies ? (
          <Typography>Cargando...</Typography>
        ) : (
          onBillboard.map((movie) => (
            <MovieCard
              key={movie._id}
              coverUrl={movie.coverUrl}
              title={movie.title}
            />
          ))
        )}
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
        {loadingMovies ? (
          <Typography>Cargando...</Typography>
        ) : (
          comingSoon.map((movie) => (
            <MovieCard
              key={movie._id}
              coverUrl={movie.coverUrl}
              title={movie.title}
            />
          ))
        )}
      </Box>
    </Box>
  );
};
