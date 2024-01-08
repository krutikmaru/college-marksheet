import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import toast from "react-hot-toast";

const UpdateMarks = ({
  batch,
  courseName,
  examType,
  selectedSubject,
  handleStudentMarkChange,
  students,
  goBackToSubjectList,
  course,
  setCourse,
}) => {
  const handlePublish = () => {
    const areMissingMarks = students[batch][courseName].students.filter(
      (student) =>
        !student[selectedSubject.sem][selectedSubject.abbrevation][
          examType.toLowerCase()
        ]
    );
    if (areMissingMarks.length !== 0) {
      toast.error("Please fill in all marks");
      return;
    } else {
      const copy = JSON.parse(JSON.stringify(course));
      copy.data[batch][courseName][selectedSubject.sem].subjects = copy.data[
        batch
      ][courseName][selectedSubject.sem].subjects.map((subject) => {
        if (subject.objectId === selectedSubject.objectId) {
          subject.status[examType.toLowerCase()] = "pending";
          return subject;
        }
        return subject;
      });

      setCourse(copy);
      toast.success("Published");
      goBackToSubjectList();
    }
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-medium">
        {selectedSubject.title} {examType}
      </h1>
      <div className="flex items-center justify-between my-4">
        <button
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          onClick={goBackToSubjectList}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          Back to Batches
        </button>
        <button
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          onClick={handlePublish}
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-3" />
          Publish
        </button>
      </div>
      <div className="flex flex-col space-y-4 pb-20">
        {students[batch][courseName].students.map((student, index) => {
          return (
            <StudentMarkSection
              key={student.uid}
              student={student}
              marks={
                student[selectedSubject.sem][selectedSubject.abbrevation][
                  examType
                ]
              }
              index={index}
              handleStudentMarkChange={handleStudentMarkChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UpdateMarks;

const StudentMarkSection = ({
  student,
  marks,
  index,
  handleStudentMarkChange,
}) => {
  return (
    <div className="flex flex-col bg-[#131313] p-5 rounded-md">
      <div className="flex items-center justify-start">
        <div className="w-9 h-9 rounded-full flex justify-center items-center mr-4 bg-jhc-blue-primary cursor-pointer relative overflow-hidden">
          {student.name[0].toUpperCase()}
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-lg ">{student.name}</h1>
          <span className="text-xs text-[#9c9c9c]">{student.uid}</span>
        </div>
      </div>
      <div className="w-full mt-4">
        <span className="text-xs text-[#5f5f5f] font-medium">Marks</span>
        <input
          value={marks}
          type="number"
          onChange={(e) => {
            handleStudentMarkChange(index, e.target.value);
          }}
          onWheel={(e) => e.target.blur()}
          className="w-full bg-[#131313] py-3 px-4 rounded-md border-2 border-[#1d1d1d] outline-none text-base"
        />
      </div>
    </div>
  );
};
