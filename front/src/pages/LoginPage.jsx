import { Box } from "@mui/material"
import { Login } from "../components/authentication/Login" 
export const LoginPage = () => {
  return (
    <Box
    sx={{
      width: "100%",
      padding: "10px",
      margin: "auto",
      
    }}
    >

      <Login />

    </Box>

  )
}
