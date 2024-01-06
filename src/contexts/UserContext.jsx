import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    UID: "BSCIT_AS",
    course: "BSCIT",
    name: "Afreen Shaikh",
    email: "afreenshaikh@jaihindcollege.edu.in",
    isAdmin: false,
  });

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
