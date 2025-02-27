import { Link as RouterLink } from "react-router-dom";
import { Box, Container, IconButton, Typography, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import { useMediaQ } from "../../hooks/useMediaQ";
import { PopperInfo } from "./PopperInfo";
import { useAuth } from "../../hooks/useAuth";

export const Footer = () => {

  const {isAuth, logout}= useAuth();

  const options = ["Cartelera", "Proximamente", "Contacto"];
  const { isMovile, isTablet } = useMediaQ();


  return (
    <Box
      sx={{
        bgcolor: "#333",
        color: "white",
        display: "flex",
        width: "100%",
        flexDirection: "column",
        marginTop: 2,
        padding: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginX: isMovile ? 0 : isTablet ? 4 : 5,
          bgcolor: "#333",
        }}
      >
        <Container
          sx={{
            bgcolor: "#333",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContentc: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", bgcolor: "#333", color: "#808080" }}
          >
            Redes
          </Typography>
          <Box
            sx={{
              bgcolor: "#333",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <LinkedInIcon sx={{ bgcolor: "#333" }} />
            </IconButton>
            <IconButton>
              <GitHubIcon sx={{ bgcolor: "#333" }} />
            </IconButton>
            <IconButton>
              <WorkIcon sx={{ bgcolor: "#333" }} />
            </IconButton>
          </Box>
        </Container>

        <Container
          sx={{
            bgcolor: "#333",
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContentc: "center",
          }}
        >
          {options.map((option) => {
            return (
              <Typography
                sx={{
                  bgcolor: "#333",
                  color: "#808080",
                  paddingLeft: 2,
                }}
                key={option}
              >
                {option}
              </Typography>
            );
          })}

          <Link
            component={RouterLink}
            to={isAuth ? "/dashboard" : "/login"}
            onClick={isAuth ? logout : null}
            sx={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                bgcolor: "#333",
                color: "white",
                paddingLeft: 2,
              }}
            >
              {isAuth ? "Desconectarse" : "Acceso"}
            </Typography>
          </Link>
        </Container>

        <Container
          sx={{
            bgcolor: "#333",
            display: "flex",
            alignItems: "start",
            flexDirection: "column",
            justifyContentc: "center",
          }}
        >
          <PopperInfo />
        </Container>
      </Box>
    </Box>
  );
};
