import React from "react";
import MenubarSection from "./MenubarSection";
import { menubar } from "../../../utils/data/admin/menubar";

const Menubar = () => {
  return (
    <div className="w-full h-full p-5 pt-10 ">
      <MenubarSection tag="ACTIONS" data={menubar.actions} />
      <MenubarSection tag="MANAGE" data={menubar.account} />
    </div>
  );
};

export default Menubar;
