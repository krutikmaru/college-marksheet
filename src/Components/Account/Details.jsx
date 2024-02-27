import React from "react";
import { motion } from "framer-motion";

const Details = ({ name, email, joined }) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
        ease: "easeInOut",
      }}
    >
      <span className="text-[#979797] text-xl ml-2 ">Account Details</span>

      <div className="w-full min-h-[200px] mt-2 flex rounded-md p-5 flex-col space-y-7 bg-[#101010] border-[1px] border-[#1a1a1a]">
        <div>
          <p className="text-[#747474] text-sm font-medium mb-1 ml-1">Name</p>
          <div className="flex items-center">
            <input
              type="text"
              value={name}
              className="bg-[#181818] text-[#636363] w-full rounded-md py-3 px-4 text-base outline-none border-2 border-[#1f1f1f] mr-2"
            />
          </div>
        </div>
        <div>
          <p className="text-[#747474] text-sm font-medium mb-1 ml-1">Email</p>

          <input
            type="text"
            disabled
            value={email}
            className="bg-[#181818] w-full rounded-md py-3 px-4 text-base text-[#636363] outline-none border-2 border-[#1f1f1f]"
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Details;

