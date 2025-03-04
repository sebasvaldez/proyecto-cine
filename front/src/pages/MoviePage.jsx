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
        flexDirection: isMovile ? "column" : "row",
        alignItems: "center",
      }}
    >
      {/* Trailer  */}
      <Grid2>
        <ReactPlayer
          url={movie?.trailerUrl}
          controls
          width={isMovile ? "380px" : isTablet ? "420px" : "600px"}
          height={isMovile ? "250px" : isTablet ? "300px" : "400px"}
        />
      </Grid2>

      {/* este grid es de la imagen de portada y la info de la pelicula */}
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
            <Typography
              variant="span"
              sx={{ color: "gray", fontWeight: "bold" }}
            >
              Género:
            </Typography>

            {movie?.genre.map((genre) => genre + ", ")}
          </Typography>

          <Typography>
            <Typography
              variant="span"
              sx={{ color: "gray", fontWeight: "bold" }}
            >
              Reparto:
            </Typography>
            {movie?.cast.map((actor) => actor + ", ")}
          </Typography>
          <Typography>
            <Typography
              variant="span"
              sx={{ color: "gray", fontWeight: "bold" }}
            >
              Duración:
            </Typography>
            {movie?.duration} minutos.
          </Typography>
          <Typography>
            <Typography
              variant="span"
              sx={{ color: "gray", fontWeight: "bold" }}
            >
              Director:
            </Typography>
            {movie?.director}
          </Typography>
        </Grid2>
       
      </Grid2>

      <Grid2>
        <Typography variant="p" sx={{ textAlign: "justify", fontSize: "1.1rem" }}>
          {movie?.synopsis}

        </Typography>
      </Grid2>
      

    </Container>
  );
};
