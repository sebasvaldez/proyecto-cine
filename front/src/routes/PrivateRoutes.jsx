import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const PrivateRoutes = ({  children }) => {
  const { isAuth, isLoading } = useAuth();
  
  console.log("isLoading: "+isLoading)
  console.log("isAuth: "+isAuth)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuth && !isLoading) {
    return <Navigate to="/login" />;
  }

  return children;

  
};
