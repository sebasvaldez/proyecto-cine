import { Box, Container, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import { useMediaQ } from "../../hooks/useMediaQ";
import { PopperInfo } from "./PopperInfo";

export const Footer = () => {
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
      {/* <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          bgcolor: "#333",
          color: "#808080",
          padding: 1,
        }}
      >
        Proyecto Cine
      </Typography> */}

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
          <Typography
            sx={{
              bgcolor: "#333",
              color: "#808080",
              paddingLeft: 2,
            }}
          >
            Cartelera
          </Typography>
          <Typography
            sx={{
              bgcolor: "#333",
              color: "#808080",
              paddingLeft: 2,
            }}
          >
            Proximamente
          </Typography>
          <Typography
            sx={{
              bgcolor: "#333",
              color: "#808080",
              paddingLeft: 2,
            }}
          >
            Contacto
          </Typography>
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
