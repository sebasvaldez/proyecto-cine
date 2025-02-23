import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginRequest } from "../../api/authApi";

import { useNavigate } from "react-router-dom";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // const navigate = useNavigate();


  const login = async (email, password)=>{
    setIsLoading(true);
    try {
      const response = await loginRequest(email, password);
      setUser(response.data);
      // setActiveUser(true);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      
    }
  }

console.log(user)

  useEffect(() => {
    if (activeUser) {
      setDarkMode(user.darkMode);
    } else {
      setDarkMode(true);
    }
  }, [activeUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        activeUser,
        darkMode,
        setDarkMode,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
