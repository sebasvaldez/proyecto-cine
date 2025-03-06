import { useParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { Container, Grid2, Typography, Box, Button } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { useMediaQ } from "../hooks/useMediaQ";
import { useState } from "react";
import {
  CardImage,
  MovieDescription,
  MovieTime,
  MovieDay,
  MovieConditionalButton,
} from "../components/movieComponents/";

export const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useMovies();
  const { isMovile, isTablet, isDesktop } = useMediaQ();
  const movie = movies.find((movie) => movie._id === id);

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: isMovile ? "column" : "row",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Trailer  */}
      <Grid2
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {!isMovile && <CardImage movie={movie} />}

        <ReactPlayer
          url={movie?.trailerUrl}
          controls
          width={isMovile ? "380px" : isTablet ? "480px" : "600px"}
          height={isMovile ? "250px" : isTablet ? "340px" : "400px"}
        />
      </Grid2>

      {/* este grid es de la imagen de portada y la info de la pelicula */}
      <Grid2
        sx={{
          display: "flex",
          justifyContent: isMovile ? "space-around" : "center",
          alignItems: "start",
          flexDirection: "row",
          gap: 2,
          marginTop: 3,
          width: "100%",
        }}
      >
        {isMovile && <CardImage movie={movie} />}

        <MovieDescription movie={movie} />
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            display: !isMovile ? "flex" : "none",
          }}
        >
          <MovieDay selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          <MovieTime
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
          <MovieConditionalButton selectedDay={selectedDay} selectedTime={selectedTime} />
        </Grid2>
      </Grid2>
      {isMovile && (
        <Grid2 sx={{}}>
          <Typography
            variant="p"
            sx={{ textAlign: "justify", fontSize: "1.1rem" }}
          >
            {movie?.synopsis}
          </Typography>
        </Grid2>
      )}

      <Box
        sx={{
          width: "100%",
          display: isMovile ? "flex" : "none",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <MovieTime
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />

        <MovieDay selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
        <MovieConditionalButton
          selectedDay={selectedDay}
          selectedTime={selectedTime}
        />
      </Box>
    </Container>
  );
};
