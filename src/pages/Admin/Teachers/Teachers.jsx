import React, { useEffect, useState } from "react";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import { useDataStore } from "../../../contexts/DataStoreContext";
import SelectBatch from "../../../Components/reusables/SelectBatch";
import SelectCourse from "../../../Components/reusables/SelectCourse";
import { getAbbreviation } from "../../../utils/functions/getAbbrevation";
import toast from "react-hot-toast";
import ActionButtons from "../../../Components/Admin/Teachers/ActionButtons";
import AddTeacher from "../../../Components/Admin/Teachers/AddTeacher";
import TeacherList from "../../../Components/Admin/Teachers/TeacherList";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../../firebase/firebase";
const Teachers = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isAddTeacher, setIsAddTeacher] = useState(false);
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const {
    course,
    teachers,
    setTeachers,
    admins,
    setAdmins,
    setIsUpdating,
    updateTeachersAndAdmins,
  } = useDataStore();

  const { setSelectedMenubarItemId } = useApplicationManager();

  const auth = getAuth(app);

  useEffect(() => {
    setSelectedMenubarItemId("55e6ca900aaf432a8dea13820a36ddb1");
  }, [setSelectedMenubarItemId]);

  const goBackToBatch = () => {
    setSelectedBatch(null);
  };

  const goBackToCourse = () => {
    setSelectedCourse(null);
  };

  const handleAdd = async () => {
    if (!teacherName || !teacherEmail) {
      toast.error("All Fields are required");
      return;
    }
    const copy = JSON.parse(JSON.stringify(teachers));
    copy[selectedCourse].teachers.unshift({
      UID: `${selectedCourse}-${getAbbreviation(teacherName)}`,
      name: teacherName,
      email: teacherEmail,
      course: selectedCourse,
    });

    setIsUpdating(true);

    try {
      await createUserWithEmailAndPassword(auth, teacherEmail, teacherPassword);
      await updateTeachersAndAdmins(copy);
      setIsUpdating(false);
    } catch (e) {
      toast.error("Error Creating Teacher");
      setIsUpdating(false);
      return;
    }

    setTeachers(copy);
    setTeacherName("");
    setTeacherEmail("");
    setTeacherPassword("");
    toast.success("Teacher Created Succefully");
  };

  const handleDelete = (index, teacher) => {
    const copy = JSON.parse(JSON.stringify(teachers));
    copy[selectedCourse].teachers.splice(index, 1);
    setTeachers(copy);
    if (teacher.isAdmin) {
      setAdmins({
        admins: admins.admins.filter((admin) => admin.UID !== teacher.UID),
      });
    }
    toast.error("Teacher Deleted Succefully");
  };

  const handleAddAdmin = (UID) => {
    let copy = JSON.parse(JSON.stringify(teachers));
    let newAdmin;
    copy[selectedCourse].teachers.map((teacher) => {
      if (teacher.UID === UID) {
        teacher["isAdmin"] = true;
        newAdmin = teacher;
      }
      return teacher;
    });
    setTeachers(copy);

    copy = JSON.parse(JSON.stringify(admins));
    copy.admins.push(newAdmin);
    setAdmins(copy);
    toast.success("Made Admin");
  };

  const handleRemoveAdmin = (UID) => {
    let copy = JSON.parse(JSON.stringify(teachers));
    copy[selectedCourse].teachers.map((teacher) => {
      if (teacher.UID === UID) {
        teacher["isAdmin"] = false;
      }
      return teacher;
    });
    setTeachers(copy);

    copy = JSON.parse(JSON.stringify(admins));
    copy.admins = copy.admins.filter((admin) => admin.UID !== UID);
    setAdmins(copy);
    toast.error("Removed  Admin");
  };

  if (!selectedBatch) {
    return <SelectBatch course={course} setSelectedBatch={setSelectedBatch} />;
  }
  if (!selectedCourse) {
    return (
      <SelectCourse
        {...{ course, selectedBatch, setSelectedCourse, goBackToBatch }}
      />
    );
  }

  return (
    <div className=" flex w-full min-h-screen flex-col  px-8 py-10">
      <div>
        <h1 className="text-2xl flex justify-between items-center">
          <span>
            <span className="text-jhc-blue-primary">{selectedCourse} </span>{" "}
            Teachers 🧑🏼‍🏫
          </span>
        </h1>
      </div>
      <ActionButtons {...{ goBackToCourse, isAddTeacher, setIsAddTeacher }} />
      {isAddTeacher && (
        <AddTeacher
          {...{
            teacherName,
            setTeacherName,
            teacherEmail,
            setTeacherEmail,
            teacherPassword,
            setTeacherPassword,
            selectedCourse,
            handleAdd,
          }}
        />
      )}
      <div>
        {teachers[selectedCourse].teachers.length === 0 ? (
          <h1 className="text-[#727272]">No Student Data</h1>
        ) : (
          <TeacherList
            {...{
              teachers,
              selectedCourse,
              handleRemoveAdmin,
              handleAddAdmin,
              handleDelete,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Teachers;
