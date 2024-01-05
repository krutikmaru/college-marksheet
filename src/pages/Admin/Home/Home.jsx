import React, { useEffect } from "react";
import { useUser } from "../../../contexts/UserContext";
import { useApplicationManager } from "../../../contexts/ApplicationContext";

const Home = () => {
  const { user } = useUser();
  const { setSelectedMenubarItemId } = useApplicationManager();
  useEffect(() => {
    setSelectedMenubarItemId("5225da39369d45d7bc3c05fd03f61b69");
  }, []);
  return (
    <div className=" flex w-full min-h-screen flex-col  px-8 py-10">
      {user.email} ADMIN
    </div>
  );
};

export default Home;
