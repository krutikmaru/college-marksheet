import React from "react";

const Header = ({ loginType }) => {
  return (
    <div className="w-full h-[30%]  flex flex-col justify-center items-center">
      <div className="w-20 h-20 text-white mb-2 flex justify-center items-center bg-[#1b1b1b] rounded-xl p-4">
        <h1 className="text-blue-500 font-semibold">JHC</h1>
      </div>
      <div>
        <h1 className="text-[#676767] font-medium  ">{loginType}</h1>
      </div>
    </div>
  );
};

export default Header;
