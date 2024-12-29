import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useMediaQ } from "../../hooks/useMediaQ";

export const MovieCard = ({ image }) => {

  const {isMovile, isTablet} = useMediaQ();

  return (
    <Card sx={{ maxWidth: 345, marginTop: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="100%"
        image={image}
        alt="Portada de película"
      />
      <CardHeader
        

        sx={{ padding: "4px", textAlign: "center", ".MuiCardHeader-title":{
          fontSize: isMovile ? "1.1rem" : isTablet ? "1.3rem" : "1.5rem",
          fontWeight: "bold",
        } }}
        title="Gladiador"
      />

      {/* <CardActions sx={{ padding: 0 }} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
};
