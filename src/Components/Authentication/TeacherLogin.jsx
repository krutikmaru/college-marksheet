import React, { useState } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { useUser } from "../../contexts/UserContext";
import toast from "react-hot-toast";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useDataStore } from "../../contexts/DataStoreContext";

const TeacherLogin = ({
  auth,
  setIsAdminLogin,
  firestore,
  authRequestSent,
  setAuthRequestSent,
}) => {
  const { setUser } = useUser();
  const { setAdminLogin } = useApplicationManager();
  const { teachers } = useDataStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetLinkSent, setResetLinkSent] = useState(false);

  const parentVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const childVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("All fields required");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("Email is not valid ");
      return;
    }
    if (password.length < 6) {
      toast.error("Password too short");
      return;
    }
    setAdminLogin(false);
    try {
      setAuthRequestSent(true);
      await signInWithEmailAndPassword(auth, email, password);
      let foundTeacher = null;
      for (let course in teachers) {
        for (let i = 0; i < teachers[course].teachers.length; i++) {
          if (teachers[course].teachers[i].email === email) {
            foundTeacher = teachers[course].teachers[i];
            break;
          }
        }
      }
      setUser(foundTeacher);
    } catch (error) {
      const errorCode = error.code;
      if (String(errorCode) === "auth/invalid-credential") {
        toast.error("Invalid email or password");
      } else {
        toast.error(error.message);
      }
    } finally {
      setAuthRequestSent(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (resetLinkSent) {
      toast("Reset Link already sent", { icon: "✉️" });
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent. Check your inbox.");
      setResetLinkSent(true);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again later.");
    }
  };

  return (
    <motion.div
      className="w-full h-full sm:w-[400px] sm:h-[600px] bg-[#0f0f0f] rounded-lg overflow-hidden"
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <Header loginType={"Teacher Login"} />
      <motion.div
        className="w-full h-[70%] flex  justify-center items-center flex-col px-14 "
        variants={childVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="w-full flex flex-col justify-center items-center  mb-20">
          <div className=" w-full  mb-4">
            <input
              className="w-full h-10 bg-transparent border-b-[1px] outline-none text-gray-400 px-2 text-base border-[#181818] placeholder:text-[#434343]"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" w-full flex flex-col items-end">
            <input
              className="w-full  h-10 bg-transparent border-b-[1px] outline-none text-gray-400 px-2 text-base border-[#181818] placeholder:text-[#434343] "
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleResetPassword}
              className="text-right mt-4 text-[#676767] font-light text-sm hover:underline "
            >
              Forgot Password
            </button>
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full h-10 bg-jhc-blue-primary font-medium text-white rounded-md mb-5"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="flex justify-center items-center text-[#676767] text-sm">
            <div className="mr-1">An Admin?</div>
            <button
              disabled={authRequestSent}
              onClick={() => setIsAdminLogin(true)}
              className="underline text-jhc-blue-primary"
            >
              Admin Login
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeacherLogin;
