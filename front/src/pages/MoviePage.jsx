import { useParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { Card, CardMedia, Container, Grid2, Typography } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { useMediaQ } from "../hooks/useMediaQ";

export const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useMovies();
  const { isMovile, isTablet, isDesktop } = useMediaQ();
  const movie = movies.find((movie) => movie._id === id);

  console.log(movie);
  // console.log(id)

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: isMovile ? "column-reverse" : "row",
        alignItems: "center",
      }}
    >
      <Grid2
        sx={{
          display: "flex",
          justifyContent: isMovile ? "space-around" : "center",
          alignItems: "start",
          flexDirection: isMovile ? "row" : "column",
          gap: 2,
          marginTop: 3,
          width: "100%",
        }}
      >
        <Card
          sx={{
            maxWidth: isMovile ? "160px" : isTablet ? "420px" : "400px",
            maxHeight: isMovile ? "230" : isTablet ? "560px" : "550px",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={movie?.coverUrl}
            alt={movie?.title}
          />
        </Card>
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
          <Typography variant="h5">{movie?.title}</Typography>
          <Typography>
            Género: {movie?.genre.map((genre) => genre + ", ")}
          </Typography>
          <Typography>
            Duración:Actores: {movie?.cast.map((actor) => actor + ", ")}{" "}
          </Typography>
          <Typography>Director: {movie?.director}</Typography>
          <Typography>Duración: {movie?.duration} minutos.</Typography>
        </Grid2>
      </Grid2>
      <Grid2>
        <ReactPlayer
          url={movie?.trailerUrl}
          controls
          width={isMovile ? "380px" : isTablet ? "420px" : "600px"}
          height={isMovile ? "250px" : isTablet ? "300px" : "400px"}
        />
      </Grid2>
    </Container>
  );
};
