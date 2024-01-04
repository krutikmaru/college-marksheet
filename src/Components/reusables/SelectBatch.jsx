import React from "react";
import { motion } from "framer-motion";
const SelectBatch = ({ course, setSelectedBatch }) => {
  const batches = [];
  for (const batch in course.data) {
    batches.push(batch);
  }
  return (
    <div className=" flex w-full min-h-screen flex-col  px-8 py-10">
      <h1 className="text-2xl mb-4">
        Select <span className="text-jhc-blue-primary">Batch</span> 📅
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
        {batches.map((batch) => {
          return (
            <div
              className="w-full h-28 bg-[#131313] text-xl font-medium border-[1px] border-[#131313] text-[#838383] flex justify-center items-center cursor-pointer rounded-md hover:border-jhc-blue-primary transition-colors ease-in-out duration-200"
              key={batch}
              onClick={() => setSelectedBatch(batch)}
            >
              {batch}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SelectBatch;
