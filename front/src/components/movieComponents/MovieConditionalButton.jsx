import { Button } from "@mui/material";
export const MovieConditionalButton = ({selectedTime,selectedDay}) => {
  return (
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
  )
}
