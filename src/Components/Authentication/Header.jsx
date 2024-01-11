import React from "react";

const Header = ({ loginType }) => {
  return (
    <div className="w-full h-[30%]  flex flex-col justify-center items-center">
      <div className="w-16 h-20 mb-4">
        <img src="/assets/logo.png" alt="JHC" />
      </div>
      <div>
        <h1 className="text-[#676767] font-medium  ">{loginType}</h1>
      </div>
    </div>
  );
};

export default Header;
