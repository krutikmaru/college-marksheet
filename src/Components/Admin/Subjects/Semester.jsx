import React, { useEffect, useState } from "react";
import SubjectSection from "./SubjectSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const Semester = ({
  semester,
  teachers,
  handleSubjectNameChange,
  handleSubjectIdChange,
  handleSubjectTeacherChange,
  handleAddSubject,
  handleDeleteSubject,
  sem,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [subjectSections, setSubjectSections] = useState([]);
  useEffect(() => {
    const arr = [];
    for (let i = 0; i < semester.subjects.length; i++) {
      arr.push(
        <SubjectSection
          key={semester.subjects[i].objectId}
          teacher={semester.assignedTeacher[i]}
          subject={semester.subjects[i]}
          sem={semester.key}
          index={i}
          handleSubjectNameChange={handleSubjectNameChange}
          handleSubjectTeacherChange={handleSubjectTeacherChange}
          handleDeleteSubject={(index) => {
            handleDeleteSubject(sem, index);
          }}
          handleSubjectIdChange={(index, newId) =>
            handleSubjectIdChange(sem, index, newId)
          }
          teachers={teachers}
        />
      );
    }
    setSubjectSections(arr);
  }, [
    handleSubjectNameChange,
    handleSubjectTeacherChange,
    semester.assignedTeacher,
    semester.key,
    semester.subjects,
    teachers,
    handleDeleteSubject,
    sem,
    handleSubjectIdChange,
  ]);

  return (
    <div
      key={semester.title}
      className="border-2 border-dashed border-[#1d1d1d] rounded-md px-5 py-7"
    >
      <div
        className="flex justify-between items-center cursor-pointer "
        style={{ marginBottom: isExpanded ? 16 : 0 }}
      >
        <h1 className="text-base text-whitefont-medium">{semester.title}</h1>
        {isExpanded ? (
          <FontAwesomeIcon
            onClick={() => setIsExpanded(false)}
            icon={faChevronUp}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => setIsExpanded(true)}
            icon={faChevronDown}
          />
        )}
      </div>
      {isExpanded && (
        <button
          onClick={() => handleAddSubject(sem)}
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md mb-4"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-3" />
          Add Subject
        </button>
      )}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="flex flex-col space-y-4"
        >
          {subjectSections}
        </motion.div>
      )}
    </div>
  );
};

export default Semester;
