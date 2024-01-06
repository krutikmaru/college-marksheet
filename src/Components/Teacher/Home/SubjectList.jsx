import {
  faArrowLeft,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SubjectList = ({
  teacherSubjects,
  goBackToBatch,
  examType,
  examTypes,
  setExamType,
  setSubject,
}) => {
  console.log(teacherSubjects);
  return (
    <div className="flex flex-col">
      <ExamTypeSelector {...{ examTypes, examType, setExamType }} />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl mt-4">Your Subjects</h1>
        <button
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          onClick={goBackToBatch}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          Back to Batches
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-4">
        {teacherSubjects.map((teacherSubject) => {
          return (
            <div className="w-[350px] h-[300px] mx-auto gap-0 mb-4 rounded-md overflow-hidden bg-[#131313] flex flex-col items-center relative">
              <div className="w-full h-[130px] bg-[#0f0f0f] flex justify-center items-center  text-5xl font-medium">
                {teacherSubject.abbrevation}
              </div>
              <div className="mt-4 ">
                <div className="px-6  text-xl font-medium text-[#c7c7c7]">
                  {teacherSubject.title}
                </div>
                <div className="px-6 text-sm mt-1 text-[#858585]">
                  {teacherSubject.id}
                </div>
              </div>
              <div className="absolute bottom-5 w-full mx-3 flex justify-center items-center">
                {teacherSubject.isPublished[examType.toLowerCase()] ? (
                  <button className="text-sm text-white bg-green-500 py-2 px-4 rounded-md w-[80%] ">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                ) : (
                  <button
                    onClick={() => setSubject(teacherSubject)}
                    className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md w-[80%] "
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectList;

const ExamTypeSelector = ({ examTypes, examType, setExamType }) => {
  return (
    <div className="flex items-center justify-start space-x-2">
      <h1 className="text-sm text-[#838383]">Select Type:</h1>
      <div className="flex justify-start items-center space-x-2">
        {examTypes.map((type) => {
          if (type === examType) {
            return (
              <div
                key={type}
                className="text-xs py-1 px-5 rounded-full bg-jhc-blue-primary text-white border-2 border-jhc-blue-primary cursor-pointer"
              >
                {type}
              </div>
            );
          }
          return (
            <div
              key={type}
              onClick={() => setExamType(type)}
              className="text-xs py-1 px-5 rounded-full  text-white border-2 border-jhc-blue-primary cursor-pointer"
            >
              {type}
            </div>
          );
        })}
      </div>
    </div>
  );
};
