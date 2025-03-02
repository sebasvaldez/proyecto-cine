import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
} from "@mui/material/";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { useMediaQ } from "../../hooks/useMediaQ";
import {Link} from "react-router-dom"

export const MovieCard = ({ coverUrl, title, id }) => {
  const { isMovile, isTablet } = useMediaQ();

  return (
    <Card sx={{ maxWidth: 345, marginTop: 2, boxShadow: 3 }}>
      <Link to={`/movie/${id}`}>
      <CardMedia
        component="img"
        height="10%"
        image={coverUrl}
        alt="Portada de película"
      />
      </Link>
      <CardHeader
        sx={{
          padding: "4px",
          textAlign: "center",
          ".MuiCardHeader-title": {
            fontSize: isMovile ? "1.1rem" : isTablet ? "1.3rem" : "1.5rem",
            fontWeight: "bold",
          },
        }}
        title={title}
      />

      <CardActions sx={{ padding: 0 }} disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
};
