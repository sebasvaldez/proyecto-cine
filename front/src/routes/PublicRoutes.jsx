import { Navigate } from "react-router-dom";

export const PublicRoutes = ({children}) => {
    const isAuthenticated= false;


    return !isAuthenticated ? children : <Navigate to="/home" />;


};
