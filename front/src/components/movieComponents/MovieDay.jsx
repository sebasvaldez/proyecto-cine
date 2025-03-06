import { Grid2, Button } from "@mui/material";

export const MovieDay = ({ selectedDay, setSelectedDay }) => {
  const handleDaySelect = (day) => {
    setSelectedDay((prevDay) => (prevDay === day ? null : day));
  };
  return (
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
                padding:".75rem",
              
              backgroundColor: selectedDay === day ? "#1975c6" : "transparent",
            }}
            variant="outlined"
            onClick={() => handleDaySelect(day)}
          >
            {day}
          </Button>
        );
      })}
    </Grid2>
  );
};
