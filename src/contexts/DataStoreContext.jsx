import React, { createContext, useContext, useEffect, useState } from "react";
import { courseData } from "../utils/data/dummy/course";
import { teachersData } from "../utils/data/dummy/teachers";
import { studentsData } from "../utils/data/dummy/students";
import { adminData } from "../utils/data/dummy/admin";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import app from "../firebase/firebase";
import toast from "react-hot-toast";

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
  const [students, setStudents] = useState(studentsData);
  const [admins, setAdmins] = useState(adminData);
  const [isFetching, setIsFetching] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const firestore = getFirestore(app);

  useEffect(() => {
    // async function lol() {
    //   try {
    //     const docRef = doc(firestore, "course", "Qh1Imi2W0JqXjdLA6tns");
    //     const result = await updateDoc(docRef, course);
    //     alert("ok");
    //     console.log(result);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // lol();
    setIsFetching(false);
    async function fetchCourse() {
      const docRef = doc(firestore, "course", "Qh1Imi2W0JqXjdLA6tns");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Error Fetching Course");
      }
    }
    async function fetchTeachers() {
      const docRef = doc(firestore, "teachers", "IZxeMB9gnzDoCWgq0b78");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Error Fetching Teachers");
      }
    }
    async function fetchStudents() {
      const docRef = doc(firestore, "students", "8m0PDPcH1zKA6pelAkly");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Error Fetching Students");
      }
    }
    async function fetchAdmins() {
      const docRef = doc(firestore, "admins", "CSphQnVo1f6TZUedAy4k");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        throw new Error("Error Fetching Admins");
      }
    }
    try {
      Promise.all([
        fetchCourse(),
        fetchTeachers(),
        fetchStudents(),
        fetchAdmins(),
      ]).then(([courseData, teachersData, studentsData, adminsData]) => {
        setCourse(courseData);
        setTeachers(teachersData);
        setStudents(studentsData);
        setAdmins(adminsData);
        setIsFetching(false);
      });
    } catch (e) {
      console.log(e);
    }
  }, [firestore]);

  const updateStudents = async () => {
    try {
      setIsUpdating(true);
      const docRef = doc(firestore, "students", "8m0PDPcH1zKA6pelAkly");
      await updateDoc(docRef, students);
      toast.success("Updated");
    } catch (e) {
      toast.error("Error updating students");
      console.log(e);
    } finally {
      setIsUpdating(false);
    }
  };

  const updateCourse = async (copy = null) => {
    try {
      setIsUpdating(true);

      const dataToUpdate = copy ? copy : course;

      const docRef = doc(firestore, "course", "Qh1Imi2W0JqXjdLA6tns");
      await updateDoc(docRef, dataToUpdate);

      toast.success("Updated");
    } catch (e) {
      toast.error("Error updating");
    } finally {
      setIsUpdating(false);
    }
  };

  const updateTeachersAndAdmins = async (copy = null) => {
    try {
      setIsUpdating(true);
      const dataToUpdate = copy ? copy : teachers;
      const teachersDocRef = doc(firestore, "teachers", "IZxeMB9gnzDoCWgq0b78");
      await updateDoc(teachersDocRef, dataToUpdate);
      const adminsDocRef = doc(firestore, "admins", "CSphQnVo1f6TZUedAy4k");
      await updateDoc(adminsDocRef, admins);
      toast.success("Updated");
    } catch (e) {
      toast.error("Error updating");
    } finally {
      setIsUpdating(false);
    }
  };

  const value = {
    course,
    setCourse,
    teachers,
    setTeachers,
    students,
    setStudents,
    admins,
    setAdmins,

    isFetching,
    setIsFetching,
    isUpdating,
    setIsUpdating,

    updateCourse,
    updateTeachersAndAdmins,
    updateStudents,
  };
  return (
    <DataStoreContext.Provider value={value}>
      {children}
    </DataStoreContext.Provider>
  );
};
