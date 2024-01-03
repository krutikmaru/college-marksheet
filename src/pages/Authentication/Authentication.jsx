import React, { useState } from "react";
// import app from "../../backend/Firebase/firebase.js";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import AdminLogin from "../../Components/Authentication/AdminLogin";
import TeacherLogin from "../../Components/Authentication/TeacherLogin";
// import Loading from "../../Components/Authentication/Loading.jsx";

const Authentication = () => {
  const [isAdminLogin, setIsAdminLogin] = useState(true);
  // const [authRequestSent, setAuthRequestSent] = useState(false);
  // const auth = getAuth(app);
  // const firestore = getFirestore(app);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black-main font-lexend overflow-hidden">
      {/* {authRequestSent && <Loading />} */}
      {isAdminLogin ? (
        <AdminLogin
          setIsAdminLogin={setIsAdminLogin}
          // auth={auth}
          // firestore={firestore}
          // authRequestSent={authRequestSent}
          // setAuthRequestSent={setAuthRequestSent}
        />
      ) : (
        <TeacherLogin
          setIsAdminLogin={setIsAdminLogin}
          // auth={auth}
          // firestore={firestore}
          // authRequestSent={authRequestSent}
          // setAuthRequestSent={setAuthRequestSent}
        />
      )}
    </div>
  );
};

export default Authentication;
