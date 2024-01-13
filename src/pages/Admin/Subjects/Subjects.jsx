import React, { useEffect, useState } from "react";
import { useDataStore } from "../../../contexts/DataStoreContext";
import SelectBatch from "../../../Components/reusables/SelectBatch";
import SelectCourse from "../../../Components/reusables/SelectCourse";
import Semester from "../../../Components/Admin/Subjects/Semester";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faPen } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useApplicationManager } from "../../../contexts/ApplicationContext";
import { v4 } from "uuid";

const Subjects = () => {
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { course, setCourse, teachers, updateCourse } = useDataStore();

  const { setSelectedMenubarItemId } = useApplicationManager();
  useEffect(() => {
    setSelectedMenubarItemId("24d707543a344bbda65e8157524b2f1b");
  }, [setSelectedMenubarItemId]);

  const navigate = useNavigate();
  const goBackToBatch = () => {
    setSelectedBatch(null);
  };

  const goBackToCourse = () => {
    setSelectedCourse(null);
  };

  const handleSubjectNameChange = (
    sem,
    subjectId,
    newName,
    newAbbreviation
  ) => {
    const copy = JSON.parse(JSON.stringify(course));
    copy.data[selectedBatch][selectedCourse][sem].subjects = copy.data[
      selectedBatch
    ][selectedCourse][sem].subjects.map((s) => {
      if (s.id === subjectId) {
        s.title = newName;
        s.abbrevation = newAbbreviation;
        return s;
      }
      return s;
    });
    setCourse(copy);
  };

  const handleSubjectTeacherChange = (
    sem,
    oldTeacherId,
    newTeacherId,
    newTeacherName
  ) => {
    const copy = JSON.parse(JSON.stringify(course));
    copy.data[selectedBatch][selectedCourse][sem].assignedTeacher = copy.data[
      selectedBatch
    ][selectedCourse][sem].assignedTeacher.map((teacher) => {
      if (teacher.id === oldTeacherId) {
        return { id: newTeacherId, name: newTeacherName };
      }
      return teacher;
    });
    setCourse(copy);
  };

  const handleSubjectIdChange = (sem, index, newId) => {
    const copy = JSON.parse(JSON.stringify(course));
    copy.data[selectedBatch][selectedCourse][sem].subjects[index]["id"] = newId;
    setCourse(copy);
  };

  const handleAddSubject = (sem) => {
    if (teachers[selectedCourse].teachers.length === 0) {
      toast.error(`Teachers for ${selectedCourse} not set`);
      return;
    }
    const copy = JSON.parse(JSON.stringify(course));
    copy.data[selectedBatch][selectedCourse][sem].subjects.unshift({
      objectId: v4(),
      title: "",
      id: "",
      abbrevation: "",
      status: {
        ca1: "unpublished",
        ca2: "unpublished",
        pr: "unpublished",
        see: "unpublished",
      },
    });
    copy.data[selectedBatch][selectedCourse][sem].assignedTeacher.unshift({
      name: teachers[selectedCourse].teachers[0].name,
      id: teachers[selectedCourse].teachers[0].UID,
    });
    setCourse(copy);
  };

  const handleDeleteSubject = (sem, index) => {
    const copy = JSON.parse(JSON.stringify(course));
    copy.data[selectedBatch][selectedCourse][sem].subjects.splice(index, 1);
    copy.data[selectedBatch][selectedCourse][sem].assignedTeacher.splice(
      index,
      1
    );
    toast.error("Deleted");

    setCourse(copy);
  };

  const handleUpdate = async () => {
    setCourse(course);
    await updateCourse();
    navigate("/");
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
                handleAddSubject,
                handleDeleteSubject,
                handleSubjectIdChange,
              }}
              key={semester["key"]}
              sem={semester["key"]}
              teachers={teachers[selectedCourse].teachers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Subjects;
