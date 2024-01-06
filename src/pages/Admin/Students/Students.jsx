import React, { useEffect, useState } from "react";

import { useDataStore } from "../../../contexts/DataStoreContext";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import SelectBatch from "../../../Components/reusables/SelectBatch";
import SelectCourse from "../../../Components/reusables/SelectCourse";
import { extractStartYearFromBatch } from "../../../utils/functions/extractStartYearFromBatch";
import toast from "react-hot-toast";
import ActionButtons from "../../../Components/Admin/Students/ActionButtons";
import AddStudent from "../../../Components/Admin/Students/AddStudent";
import StudentList from "../../../Components/Admin/Students/StudentList";

const Students = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isAddStudent, setIsAddStudent] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const { setSelectedMenubarItemId } = useApplicationManager();
  const { course, students, setStudents } = useDataStore();

  useEffect(() => {
    setSelectedMenubarItemId("5fa9138bbfeb44a8a1f8287825247db0");
  }, [setSelectedMenubarItemId]);

  const goBackToBatch = () => {
    setSelectedBatch(null);
  };

  const goBackToCourse = () => {
    setSelectedCourse(null);
  };

  const handleAdd = () => {
    if (!studentName || !studentName) {
      toast.error("Field's cannot be empty");
      return;
    }
    const studentUid = `${extractStartYearFromBatch(selectedBatch)}${
      students[selectedBatch][selectedCourse]["UIDPrefix"]
    }${String(
      students[selectedBatch][selectedCourse].students.length + 1
    ).padStart(3, "0")}`;
    const studentObject = {
      name: studentName,
      email: studentEmail,
      uid: studentUid,
    };
    for (let sem in course.data[selectedBatch][selectedCourse]) {
      studentObject[sem] = {};
      if (
        course.data[selectedBatch][selectedCourse][sem].subjects.length === 0
      ) {
        toast.error(
          `Subjects for ${course.data[selectedBatch][selectedCourse][sem].title} are not set.`
        );
        return;
      }
      for (let subject of course.data[selectedBatch][selectedCourse][sem]
        .subjects) {
        if (subject["abbrevation"] === "") {
          toast.error(
            `Some subject fields in ${course.data[selectedBatch][selectedCourse][sem].title} are empty`
          );
          return;
        }
        studentObject[sem][subject["abbrevation"]] = {
          ca1: undefined,
          ca2: undefined,
          pr: undefined,
          see: undefined,
        };
      }
    }
    const copy = JSON.parse(JSON.stringify(students));
    copy[selectedBatch][selectedCourse].students.push(studentObject);
    setStudents(copy);
    setStudentName("");
    setStudentEmail("");
    toast.success("Student Added Succefully");

    console.log(studentObject);
  };

  const handleDelete = (index) => {
    const copy = JSON.parse(JSON.stringify(students));
    copy[selectedBatch][selectedCourse].students.splice(index, 1);
    setStudents(copy);
    toast.error("Student Deleted Succefully");
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
      <h1 className="text-2xl flex justify-between items-center">
        <span>
          <span className="text-jhc-blue-primary">
            {selectedBatch} {selectedCourse}{" "}
          </span>{" "}
          Students 🧑🏼‍🎓
        </span>
      </h1>
      <ActionButtons {...{ isAddStudent, setIsAddStudent, goBackToCourse }} />
      {isAddStudent && (
        <AddStudent
          {...{
            students,
            studentName,
            setStudentName,
            studentEmail,
            setStudentEmail,
            selectedBatch,
            selectedCourse,
            handleAdd,
          }}
        />
      )}
      <div>
        {students[selectedBatch][selectedCourse].students.length === 0 ? (
          <h1 className="text-[#727272]">No Student Data</h1>
        ) : (
          <StudentList
            {...{ students, selectedBatch, selectedCourse, handleDelete }}
          />
        )}
      </div>
    </div>
  );
};

export default Students;
