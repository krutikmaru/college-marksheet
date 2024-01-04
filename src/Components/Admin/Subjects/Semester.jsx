import React from "react";
import SubjectSection from "./SubjectSection";

const Semester = ({
  semester,
  teachers,
  handleSubjectNameChange,
  handleSubjectTeacherChange,
  hasEdited,
}) => {
  const subjectSections = [];
  for (let i = 0; i < semester.subjects.length; i++) {
    subjectSections.push(
      <SubjectSection
        teacher={semester.assignedTeacher[i]}
        subject={semester.subjects[i]}
        sem={semester.key}
        handleSubjectNameChange={handleSubjectNameChange}
        handleSubjectTeacherChange={handleSubjectTeacherChange}
        teachers={teachers}
      />
    );
  }
  return (
    <div
      key={semester.title}
      className="border-2 border-dashed border-[#2b2b2b] rounded-md p-5"
    >
      <h1 className="text-2xl text-jhc-blue-primary mb-2">{semester.title}</h1>
      <div className="flex flex-col space-y-4">{subjectSections}</div>
    </div>
  );
};

export default Semester;
