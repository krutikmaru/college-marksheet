import React, { createContext, useContext, useState } from "react";
import { courseData } from "../utils/data/dummy/course";
import { teachersData } from "../utils/data/dummy/teachers";

const DataStoreContext = createContext();

export const useDataStore = () => {
  const context = useContext(DataStoreContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const DataStoreProvider = ({ children }) => {
  const [course, setCourse] = useState(courseData);
  const [teachers, setTeachers] = useState(teachersData);

  const value = {
    course,
    setCourse,
    teachers,
    setTeachers,
  };
  return (
    <DataStoreContext.Provider value={value}>
      {children}
    </DataStoreContext.Provider>
  );
};
