import { Box, Typography } from "@mui/material";
import { MainCarousel } from "../components/layout/emblaCarousel/MainCarousel";
import { MovieCard } from "../components/layout/MovieCard";
import { useMediaQ } from "../hooks/useMediaQ";
import { useMovies } from "../hooks/useMovies";
import { Loading } from "../ui/";

export const HomePage = () => {
  const { isMovile, isTablet } = useMediaQ();
  const { onBillboard, comingSoon, loadingMovies } = useMovies();


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
          <Loading />
        ) : (
          onBillboard.map((movie) => (
            <MovieCard
              key={movie._id}
              coverUrl={movie.coverUrl}
              title={movie.title}
              id={movie._id}
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
          <Loading />
        ) : (
          comingSoon.map((movie) => (
            <MovieCard
              key={movie._id}
              coverUrl={movie.coverUrl}
              title={movie.title}
              id={movie._id}
            />
          ))
        )}
      </Box>
    </Box>
  );
};
