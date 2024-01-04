import React from "react";
import { motion } from "framer-motion";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectCourse = ({
  course,
  selectedBatch,
  setSelectedCourse,
  goBackToBatch,
}) => {
  const courses = [];
  for (const c in course.data[selectedBatch]) {
    courses.push(c);
  }
  return (
    <motion.div className=" flex w-full min-h-screen flex-col  px-8 py-10">
      <h1 className="text-2xl mb-4 flex justify-between flex-center items-start">
        <span>
          Select <span className="text-jhc-blue-primary">Course</span> 🎓
        </span>
        <button
          className="text-sm text-white bg-jhc-blue-primary py-2 px-4 rounded-md "
          onClick={goBackToBatch}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-3" />
          Back to Batches
        </button>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="flex flex-col space-y-4 px-20"
      >
        {courses.map((c) => {
          return (
            <div
              className="w-full h-28 bg-[#131313] text-xl font-medium border-[1px] border-[#131313] text-[#838383] flex justify-center items-center cursor-pointer rounded-md hover:border-jhc-blue-primary transition-colors ease-in-out duration-200"
              key={c}
              onClick={() => setSelectedCourse(c)}
            >
              {c}
            </div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SelectCourse;
