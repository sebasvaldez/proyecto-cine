import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const isLoading = false;
  const isAuthenticated = false;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
