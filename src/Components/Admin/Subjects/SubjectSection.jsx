import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { getAbbreviation } from "../../../utils/functions/getAbbrevation";
const SubjectSection = ({
  teacher,
  subject,
  sem,
  index,
  handleSubjectNameChange,
  handleSubjectIdChange,
  handleSubjectTeacherChange,
  handleDeleteSubject,
  teachers,
}) => {
  const [subjectTitle, setSubjectTitle] = useState(subject.title);
  const [subjectId, setSubjectId] = useState(subject.id);
  const [teacherName, setTeacherName] = useState(teacher.name);
  const [subjectAbbrevation, setSubjectAbbreviation] = useState(
    subject.abbrevation
  );

  const subjectNameRef = useRef(null);
  const [teacherSelectionVisible, setTeacherSelectionVisible] = useState(false);
  return (
    <div
      className=" w-full flex flex-col space-y-4 bg-[#1a1a1a] py-4 px-7 rounded-md "
      onClick={(e) => e.preventDefault()}
    >
      <div>
        <span className="text-xs text-[#5f5f5f] font-medium">
          Subject Title
        </span>
        <input
          ref={subjectNameRef}
          value={subjectTitle}
          onChange={(e) => {
            setSubjectTitle(e.target.value);
            setSubjectAbbreviation(getAbbreviation(e.target.value));
            handleSubjectNameChange(
              sem,
              subjectId,
              e.target.value,
              getAbbreviation(e.target.value)
            );
            subjectNameRef.current.focus();
          }}
          className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
        />
      </div>
      <div>
        <span className="text-xs text-[#5f5f5f] font-medium">Abbrevation</span>
        <div
          disabled
          className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
        >
          {subjectAbbrevation}
        </div>
      </div>
      <div>
        <span className="text-xs text-[#5f5f5f] font-medium">Subject Id</span>
        <input
          value={subjectId}
          onChange={(e) => {
            setSubjectId(e.target.value);
            handleSubjectIdChange(index, e.target.value);
          }}
          className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
        />
      </div>
      <div>
        <span className="text-xs text-[#5f5f5f] font-medium">
          Assigned Teacher
        </span>
        <div
          onClick={() => setTeacherSelectionVisible(!teacherSelectionVisible)}
          className="w-full bg-[#131313] mb-4 py-3 px-4 rounded-md border-2 border-[#1d1d1d] cursor-pointer text-base"
        >
          {teacherName}
        </div>
        {teacherSelectionVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="w-full h-80 bg-[#131313] rounded-md overflow-y-scroll p-4 flex flex-col space-y-4"
          >
            {teachers.map((t) => {
              return (
                <div
                  key={t.UID}
                  className="w-full min-h-[80px] bg-[#1b1b1b] rounded-md cursor-pointer p-4 px-7 flex justify-start items-center"
                  onClick={() => {
                    setTeacherName(t.name);
                    handleSubjectTeacherChange(sem, teacher.id, t.UID, t.name);
                    setTeacherSelectionVisible(false);
                  }}
                >
                  <div className="w-9 h-9 rounded-full flex justify-center items-center mr-4 bg-jhc-blue-primary cursor-pointer relative overflow-hidden">
                    {t.name[0].toUpperCase()}
                  </div>
                  <div className="flex flex-col justify-center items-start">
                    <h1 className="text-lg ">{t.name}</h1>
                    <span className="text-xs text-[#9c9c9c]">{t.UID}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
        <div>
          <FontAwesomeIcon
            onClick={() => {
              handleDeleteSubject(index);
            }}
            className="bg-red-500 p-3 rounded-md cursor-pointer"
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectSection;
