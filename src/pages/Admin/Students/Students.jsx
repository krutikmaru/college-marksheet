import React, { useEffect, useState } from "react";

import { useDataStore } from "../../../contexts/DataStoreContext";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import SelectBatch from "../../../Components/reusables/SelectBatch";
import SelectCourse from "../../../Components/reusables/SelectCourse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { extractStartYearFromBatch } from "../../../utils/functions/extractStartYearFromBatch";
import toast from "react-hot-toast";

const Students = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isAddStudent, setIsAddStudent] = useState(false);
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const {
    setSelectedMenubarItemId,
    activatePopupCenter,
    deactivatePopupCenter,
  } = useApplicationManager();
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
      <div className="my-4 w-full flex items-center justify-between">
        <button
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          onClick={goBackToCourse}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          Back to Courses
        </button>
        <button
          onClick={() => setIsAddStudent(!isAddStudent)}
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
        >
          <FontAwesomeIcon
            icon={isAddStudent ? faMinus : faPlus}
            className="mr-3"
          />
          Add Student
        </button>
      </div>
      {isAddStudent && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="bg-[#1b1b1b] w-full p-4 rounded-md flex flex-col items-start justify-center my-3 space-y-4"
        >
          <div className="w-full">
            <span className="text-xs text-[#5f5f5f] font-medium">
              Student Name
            </span>
            <input
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
              }}
              className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
            />
          </div>
          <div className="w-full">
            <span className="text-xs text-[#5f5f5f] font-medium">
              Student Email
            </span>
            <input
              value={studentEmail}
              onChange={(e) => {
                setStudentEmail(e.target.value);
              }}
              className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
            />
          </div>
          <div className="w-full">
            <span className="text-xs text-[#5f5f5f] font-medium">UID</span>
            <div
              disabled
              className="w-full bg-[#131313] text-[#525252] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
            >
              {`${extractStartYearFromBatch(selectedBatch)}${
                students[selectedBatch][selectedCourse]["UIDPrefix"]
              }${String(
                students[selectedBatch][selectedCourse].students.length + 1
              ).padStart(3, "0")}`}
            </div>
          </div>
          <div>
            <button
              onClick={handleAdd}
              className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
            >
              Add
            </button>
          </div>
        </motion.div>
      )}
      <div>
        {students[selectedBatch][selectedCourse].students.length === 0 ? (
          <h1 className="text-[#727272]">No Student Data</h1>
        ) : (
          <div className="w-full flex flex-col space-y-2">
            {students[selectedBatch][selectedCourse].students.map(
              (student, index) => {
                return (
                  <div
                    key={student.uid}
                    className="w-full min-h-[80px] bg-[#141414] rounded-md cursor-pointer p-4 px-7 flex justify-between items-center"
                  >
                    <div className="flex justify-start items-center">
                      <div className="w-9 h-9 rounded-full flex justify-center items-center mr-4 bg-jhc-blue-primary cursor-pointer relative overflow-hidden">
                        {student.name[0].toUpperCase()}
                      </div>
                      <div className="flex flex-col justify-center items-start">
                        <h1 className="text-lg ">{student.name}</h1>
                        <span className="text-xs text-[#9c9c9c]">
                          {student.uid}
                        </span>
                        <span className="text-xs text-[#9c9c9c]">
                          {student.email}
                        </span>
                      </div>
                    </div>

                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        activatePopupCenter(
                          <ConfirmDelete
                            handleDelete={() => {
                              handleDelete(index);
                              deactivatePopupCenter();
                            }}
                          />
                        );
                      }}
                      className="bg-red-500 p-2 rounded-md cursor-pointer text-xs"
                    />
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Students;

const ConfirmDelete = ({ handleDelete }) => {
  const { deactivatePopupCenter } = useApplicationManager();
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[350px] h-60 rounded-md bg-[#131313] font-lexend flex flex-col justify-center items-center"
    >
      <h1 className="text-white text-xl mb-5">Confirm Delete?</h1>
      <div>
        <span
          onClick={deactivatePopupCenter}
          className="mr-4 text-[#5c5c5c] text-sm underline cursor-pointer"
        >
          Cancle
        </span>
        <span
          onClick={handleDelete}
          className="py-2 px-4 text-sm bg-red-600 text-white rounded-md cursor-pointer"
        >
          Delete
        </span>
      </div>
    </div>
  );
};
