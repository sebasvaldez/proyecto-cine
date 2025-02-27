import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Loading } from "../ui/Loading";

export const PrivateRoutes = ({  children }) => {
  const { isAuth, isLoading } = useAuth();
  
 
  if (isLoading) {
    return <Loading />
  }

  if (!isAuth && !isLoading) {
    return <Navigate to="/login" />;
  }

  return children;

  
};
