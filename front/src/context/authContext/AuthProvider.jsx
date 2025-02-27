import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  loginRequest,
  logoutRequest,
  verifyTokenRequest,
  profileRequest,
} from "../../api/authApi";
import Cookies from "js-cookie";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [error, setError] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await loginRequest(email, password);
      setUser(response.data);
      setIsLoading(false);
      setIsAuth(true);
      return response.data;

    } catch (error) {
      console.log(error);
      setError(error.response.data);
      setIsLoading(false);
      setIsAuth(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await logoutRequest();
      Cookies.remove("token");
      setUser(null);
      setIsLoading(false);
      setIsAuth(false);
      localStorage.removeItem("userData");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const verifyToken= async () => {
    setIsLoading(true);
    try {
      const response = await verifyTokenRequest();
      // console.log(response.data)
      if(response){
      setUser(response.data);
      setIsLoading(false);
      setIsAuth(true);
      }
      return response.data;

    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsAuth(false);
    }
  }


  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoading(true);
      const dataUser= verifyToken()
      if(dataUser){
        setIsAuth(true);
        setIsLoading(false);
        setUser(dataUser);
      }
        
    } else {
      setIsAuth(false);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user) {
      setDarkMode(user.darkMode);
    } else {
      setDarkMode(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        darkMode,
        setDarkMode,
        login,
        logout,
        error,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
