import React from "react";
import { useUser } from "../../../contexts/UserContext";

const Home = () => {
  const { user } = useUser();
  return (
    <div className=" flex w-full min-h-screen flex-col  px-8 py-10">
      {user.email} ADMIN
    </div>
  );
};

export default Home;
