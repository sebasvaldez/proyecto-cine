import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  loginRequest,
  logoutRequest,
  verifyTokenRequest,
  profileRequest,
} from "../../api/authApi";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);


  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await loginRequest(email, password);
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await logoutRequest();
      Cookies.remove("token");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  

  const profile = async ()=>{
    setIsLoading(true);
    try {
      const response = await profileRequest();
      console.log(response)
      setUser(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  console.log(user);

  useEffect(() => {
    if (user) {
      setDarkMode(user.darkMode);
    } else {
      setDarkMode(true);
    }
  }, [user]);

 



  useEffect(()=>{
    if(Cookies.get("token")){
      profile();
    }
    
  },[]);


  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        darkMode,
        setDarkMode,
        login,
        logout,

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
