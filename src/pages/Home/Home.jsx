import React from "react";
import { useUser } from "../../contexts/UserContext";

const Home = () => {
  const { user } = useUser();
  return <div className="text-white">{user.email}</div>;
};

export default Home;
