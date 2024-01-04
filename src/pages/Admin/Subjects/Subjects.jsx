import React, { useState } from "react";
import { useDataStore } from "../../../contexts/DataStoreContext";
import SelectBatch from "../../../Components/reusables/SelectBatch";
import SelectCourse from "../../../Components/reusables/SelectCourse";
import Semester from "../../../Components/Admin/Subjects/Semester";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPen } from "@fortawesome/free-solid-svg-icons";

const Subjects = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { course, setCourse, teachers } = useDataStore();
  const [localCourse, setLocalCourse] = useState({ ...course });

  const goBackToBatch = () => {
    setSelectedBatch(null);
  };

  const goBackToCourse = () => {
    setSelectedCourse(null);
  };

  const handleSubjectNameChange = (sem, subjectId, newName) => {
    const copy = JSON.parse(JSON.stringify(localCourse));
    copy.data[selectedBatch][selectedCourse][sem].subjects = copy.data[
      selectedBatch
    ][selectedCourse][sem].subjects.map((s) => {
      if (s.id === subjectId) {
        s.title = newName;
        return s;
      }
      return s;
    });
    setLocalCourse(copy);
  };

  const handleSubjectTeacherChange = (
    sem,
    oldTeacherId,
    newTeacherId,
    newTeacherName
  ) => {
    const copy = JSON.parse(JSON.stringify(localCourse));
    copy.data[selectedBatch][selectedCourse][sem].assignedTeacher = copy.data[
      selectedBatch
    ][selectedCourse][sem].assignedTeacher.map((teacher) => {
      if (teacher.id === oldTeacherId) {
        return { id: newTeacherId, name: newTeacherName };
      }
      return teacher;
    });
    setLocalCourse(copy);
  };

  const handleUpdate = () => {
    setCourse(localCourse);
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

  const semesters = [];

  for (const sem in course.data[selectedBatch][selectedCourse]) {
    semesters.push({
      key: sem,
      ...course.data[selectedBatch][selectedCourse][sem],
    });
  }

  console.log(semesters);
  return (
    <div className=" flex w-full min-h-screen flex-col  px-8 py-10">
      <div className="mb-4 flex items-center justify-between">
        <button
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          onClick={goBackToCourse}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          Back to Courses
        </button>
        <button
          onClick={handleUpdate}
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
        >
          <FontAwesomeIcon icon={faPen} className="mr-3" />
          UPDATE
        </button>
      </div>
      <div className="w-full flex flex-col space-y-4">
        {semesters.map((semester) => {
          return (
            <Semester
              {...{
                semester,
                handleSubjectNameChange,
                handleSubjectTeacherChange,
              }}
              teachers={teachers[selectedCourse].teachers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Subjects;
