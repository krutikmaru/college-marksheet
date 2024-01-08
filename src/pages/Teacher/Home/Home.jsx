import React, { useState } from "react";
import { useUser } from "../../../contexts/UserContext";
import { useDataStore } from "../../../contexts/DataStoreContext";
import SelectBatch from "../../../Components/reusables/SelectBatch";
import SubjectList from "../../../Components/Teacher/Home/SubjectList";
import UpdateMarks from "../../../Components/Teacher/Home/UpdateMarks";

const Home = () => {
  const { user } = useUser();
  const { course, setCourse, students, setStudents } = useDataStore();

  const [selectedBatch, setSelectedBatch] = useState(null);
  const [selectedSubject, setSubject] = useState(null);
  const examTypes = ["CA1", "CA2", "PR", "SEE"];
  const [examType, setExamType] = useState(examTypes[0]);

  const goBackToBatch = () => {
    setSelectedBatch(null);
  };

  const goBackToSubjectList = () => {
    setSubject(null);
  };

  const handleStudentMarkChange = (index, value) => {
    const copy = JSON.parse(JSON.stringify(students));
    copy[selectedBatch][user.course].students[index][selectedSubject.sem][
      selectedSubject.abbrevation
    ][examType.toLowerCase()] = value;
    console.log(copy);
    setStudents(copy);
  };

  if (!selectedBatch) {
    return (
      <div className="w-full mt-5">
        <div className="text-white text-3xl px-8">
          <h1>
            Welcome <span className="text-jhc-blue-primary">{user.name}</span>
          </h1>
        </div>
        <SelectBatch course={course} setSelectedBatch={setSelectedBatch} />
      </div>
    );
  }

  if (selectedSubject) {
    console.log(selectedSubject);
    return (
      <UpdateMarks
        batch={selectedBatch}
        courseName={user.course}
        examType={examType}
        selectedSubject={selectedSubject}
        handleStudentMarkChange={handleStudentMarkChange}
        students={students}
        goBackToSubjectList={goBackToSubjectList}
        course={course}
        setCourse={setCourse}
      />
    );
  }

  const teacherSubjects = [];
  for (const sem in course.data[selectedBatch][user.course]) {
    for (
      let i = 0;
      i < course.data[selectedBatch][user.course][sem].assignedTeacher.length;
      i++
    ) {
      const teacher =
        course.data[selectedBatch][user.course][sem].assignedTeacher[i];
      if (teacher.name === user.name && teacher.id === user.UID) {
        teacherSubjects.push({
          batch: selectedBatch,
          sem: sem,
          ...course.data[selectedBatch][user.course][sem].subjects[i],
        });
      }
    }
  }

  return (
    <SubjectList
      {...{
        teacherSubjects,
        examType,
        examTypes,
        goBackToBatch,
        setExamType,
        setSubject,
      }}
    />
  );
};

export default Home;
