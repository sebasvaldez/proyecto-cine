import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const dataUser = {
    name: "Sebastian",
    lastaname: "Valdez",
    email: "sebas@gmail.com",
    password: "sebas123",
    darkMode: false,
  };

  const [user, setUser] = useState(dataUser);
  const [isLoading, setIsLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

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
        setUser,
        isLoading,
        activeUser,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
