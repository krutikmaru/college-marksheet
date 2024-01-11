import React from "react";
import { useDataStore } from "../../contexts/DataStoreContext";
import { useUser } from "../../contexts/UserContext";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const Notifications = () => {
  const { course, setCourse, updateCourse } = useDataStore();
  const { user } = useUser();

  const handlePublish = (pendingPublish) => {
    const copy = JSON.parse(JSON.stringify(course));
    copy.data[pendingPublish.batch][pendingPublish.course][
      pendingPublish.sem
    ].subjects[pendingPublish.index]["status"][pendingPublish.examType] =
      "published";
    setCourse(copy);
    updateCourse(copy);
  };

  let pendingPublishes = [];
  for (let batch in course.data) {
    for (let sem in course.data[batch][user.course]) {
      for (
        let i = 0;
        i < course.data[batch][user.course][sem].subjects.length;
        i++
      ) {
        for (let examType in course.data[batch][user.course][sem].subjects[i][
          "status"
        ]) {
          if (
            course.data[batch][user.course][sem].subjects[i]["status"][
              examType
            ] === "pending"
          ) {
            pendingPublishes.push({
              batch,
              sem,
              examType,
              course: user.course,
              index: i,
              title: course.data[batch][user.course][sem].subjects[i].title,
              abbrevation:
                course.data[batch][user.course][sem].subjects[i].abbrevation,
              teacher: course.data[batch][user.course][sem].assignedTeacher[i],
            });
          }
        }
      }
    }
  }

  return (
    <div className=" flex w-full min-h-screen flex-col">
      <h1 className="text-2xl mb-2  text-jhc-blue-primary">Notifications 🔔</h1>
      {pendingPublishes.length === 0 ? (
        <h1 className="mb-2 text-sm text-[#7d7d7d]">No new notifications</h1>
      ) : (
        <div className="flex flex-col space-y-4 mt-4">
          {pendingPublishes.map((pendingPublish) => {
            return (
              <PublishNotification
                key={pendingPublish.title}
                pendingPublish={pendingPublish}
                handlePublish={handlePublish}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Notifications;

const PublishNotification = ({ pendingPublish, handlePublish }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      key={pendingPublish.title}
      className="w-full min-h-[80px] bg-[#141414] rounded-md p-4 px-7 flex justify-between items-center"
    >
      <div className="flex justify-start items-center">
        <div className="w-9 h-9 rounded-full flex justify-center items-center mr-4 bg-jhc-blue-primary relative overflow-hidden">
          {pendingPublish.teacher.name[0].toUpperCase()}
        </div>
        <div className="flex flex-col justify-center items-start">
          <div className="flex">
            <h1 className="text-lg mr-2">
              {pendingPublish.teacher.name} published{" "}
              <span className="text-jhc-blue-primary">
                {pendingPublish.examType.toUpperCase()}
              </span>{" "}
              marks for{" "}
              <span className="text-jhc-blue-primary">
                {pendingPublish.abbrevation}
              </span>
            </h1>
          </div>
          <span className="text-xs text-[#9c9c9c]">{pendingPublish.title}</span>
        </div>
      </div>
      <div>
        <button
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          onClick={() => {
            handlePublish(pendingPublish);
          }}
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="mr-3" />
          Publish
        </button>
      </div>
    </motion.div>
  );
};
