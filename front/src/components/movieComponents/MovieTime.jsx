import { Grid2, Button } from "@mui/material";


export const MovieTime = ({selectedTime, setSelectedTime}) => {
    const handleTimeSelect = (time) => {
        setSelectedTime((prevTime) => (prevTime === time ? null : time));
      };

  return (
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
                  padding:".75rem",
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
  )
}
