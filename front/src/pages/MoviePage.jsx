import { useParams } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import {
  Card,
  CardMedia,
  Container,
  Grid2,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ReactPlayer from "react-player/youtube";
import { useMediaQ } from "../hooks/useMediaQ";
import { useState } from "react";
import { CardImage, MovieDescription } from "../components/movieComponents/";

export const MoviePage = () => {
  const { id } = useParams();
  const { movies } = useMovies();
  const { isMovile, isTablet, isDesktop } = useMediaQ();
  const movie = movies.find((movie) => movie._id === id);

  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDaySelect = (day) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day));
  };

  const handleTimeSelect = (time) => {
    setSelectedTime((prevTime) => (prevTime === time ? null : time));
  };

  //console.log(movie);
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
        <CardImage movie={movie} />

        <MovieDescription movie={movie} />
      </Grid2>

      <Grid2>
        <Typography
          variant="p"
          sx={{ textAlign: "justify", fontSize: "1.1rem" }}
        >
          {movie?.synopsis}
        </Typography>
      </Grid2>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",

          alignItems: "center",
          marginTop: 4,
        }}
      >
        {/* Elegir hora de la funcion */}
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 2,
            width: "100%",
            marginY: 2,
          }}
        >
          {["14:00", "16:00", "18:00"].map((time) => {
            return (
              <Button
                key={time}
                sx={{
                  color: "white",
                  width: "80px",
                  height: "80px",
                  backgroundColor:
                    selectedTime === time ? "#1975c6" : "transparent",
                }}
                variant="outlined"
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </Button>
            );
          })}
        </Grid2>

        {/* Elegir día de la función */}
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 2,
            width: "100%",
            arginY: 2,
          }}
        >
          {["Lunes", "Martes", "Miercoles"].map((day) => {
            return (
              <Button
                key={day}
                sx={{
                  color: "white",
                  width: "80px",
                  height: "80px",
                  backgroundColor:
                    selectedDay === day ? "#1975c6" : "transparent",
                }}
                variant="outlined"
                onClick={() => handleDaySelect(day)}
              >
                {day}
              </Button>
            );
          })}
        </Grid2>
        {/* Boton de compra */}
        <Button
          variant="contained"
          disabled={!selectedTime || !selectedDay}
          sx={{
            backgroundColor: "#1975c6",
            color: "white",
            fontWeight: "bold",
            marginTop: 4,
            width: "70%",
            marginBottom: 4,
          }}
          onClick={() => {
            alert(
              `Compra confirmada para el día ${selectedDay} a las ${selectedTime}`
            );
          }}
        >
          Continar con la compra
        </Button>
      </Box>
    </Container>
  );
};
