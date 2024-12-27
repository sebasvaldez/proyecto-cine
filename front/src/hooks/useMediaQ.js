import { useMediaQuery } from "@mui/material"


export const useMediaQ = () => {

    const isMovile = useMediaQuery("(max-width:450px)");
  const isTablet= useMediaQuery("(max-width:1023px)");
  const isDesktop= useMediaQuery("(min-width:1024px)");


  return   {isMovile,isTablet,isDesktop}
    
}
