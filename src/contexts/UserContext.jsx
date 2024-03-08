import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { useDataStore } from "./DataStoreContext";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { teachers } = useDataStore();

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        let foundTeacher = null;

        for (let course in teachers) {
          for (let i = 0; i < teachers[course].teachers.length; i++) {
            if (teachers[course].teachers[i].email === authUser.email) {
              foundTeacher = teachers[course].teachers[i];
              break;
            }
          }
        }
        setUser(foundTeacher);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, [teachers, user]);

  const value = {
    user,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
