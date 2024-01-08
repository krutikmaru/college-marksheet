import React from "react";
import { useUser } from "../../contexts/UserContext";
import Notifications from "../../Components/Home/Notifications";

const Home = () => {
  const { user } = useUser();
  return (
    <div className="text-white">
      <Notifications />
    </div>
  );
};

export default Home;
