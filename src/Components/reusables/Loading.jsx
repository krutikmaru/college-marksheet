import PuffLoader from "react-spinners/PuffLoader";

import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 z-[10000] w-screen h-screen bg-[#0a0a0a4f] backdrop-blur-md text-white flex justify-center items-center">
      <PuffLoader color="#3a3fdb" size={70} />
    </div>
  );
};

export default Loading;
