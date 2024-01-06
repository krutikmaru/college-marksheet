import React, { useEffect, useState } from "react";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import { useDataStore } from "../../../contexts/DataStoreContext";
import SelectBatch from "../../../Components/reusables/SelectBatch";
import SelectCourse from "../../../Components/reusables/SelectCourse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import {
  faArrowLeft,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { getAbbreviation } from "../../../utils/functions/getAbbrevation";
import toast from "react-hot-toast";

const Teachers = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isAddTeacher, setIsAddTeacher] = useState(false);
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const { course, teachers, setTeachers } = useDataStore();

  const {
    setSelectedMenubarItemId,
    activatePopupCenter,
    deactivatePopupCenter,
  } = useApplicationManager();

  useEffect(() => {
    setSelectedMenubarItemId("55e6ca900aaf432a8dea13820a36ddb1");
  }, [setSelectedMenubarItemId]);

  const goBackToBatch = () => {
    setSelectedBatch(null);
  };

  const goBackToCourse = () => {
    setSelectedCourse(null);
  };

  const handleAdd = () => {
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
    setTeachers(copy);
    setTeacherName("");
    setTeacherEmail("");
    toast.success("Teacher Added Succefully");
  };

  const handleDelete = (index) => {
    const copy = JSON.parse(JSON.stringify(teachers));
    copy[selectedCourse].teachers.splice(index, 1);
    setTeachers(copy);
    toast.error("Teacher Deleted Succefully");
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
        <div className="my-4 flex items-center justify-between">
          <button
            className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
            onClick={goBackToCourse}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
            Back to Courses
          </button>
          <button
            onClick={() => setIsAddTeacher(!isAddTeacher)}
            className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          >
            <FontAwesomeIcon
              icon={isAddTeacher ? faMinus : faPlus}
              className="mr-3"
            />
            Add Teacher
          </button>
        </div>
      </div>

      {isAddTeacher && (
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
              Teacher Name
            </span>
            <input
              value={teacherName}
              onChange={(e) => {
                setTeacherName(e.target.value);
              }}
              className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
            />
          </div>
          <div className="w-full">
            <span className="text-xs text-[#5f5f5f] font-medium">
              Teacher Email
            </span>
            <input
              value={teacherEmail}
              onChange={(e) => {
                setTeacherEmail(e.target.value);
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
              {`${selectedCourse}-${getAbbreviation(teacherName)}`}
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
      <div className="w-full flex flex-col space-y-2">
        {teachers[selectedCourse].teachers.map((teacher, index) => {
          return (
            <div
              key={teacher.UID}
              className="w-full min-h-[80px] bg-[#141414] rounded-md cursor-pointer p-4 px-7 flex justify-between items-center"
            >
              <div className="flex justify-start items-center">
                <div className="w-9 h-9 rounded-full flex justify-center items-center mr-4 bg-jhc-blue-primary cursor-pointer relative overflow-hidden">
                  {teacher.name[0].toUpperCase()}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-lg ">{teacher.name}</h1>
                  <span className="text-xs text-[#9c9c9c]">
                    {teacher.email}
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
        })}
      </div>
    </div>
  );
};

export default Teachers;

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
