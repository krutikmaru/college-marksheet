import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeAdmin from "../pages/Admin/Home/Home";
import HomeTeacher from "../pages/Teacher/Home/Home";
import Authentication from "../pages/Authentication/Authentication";
import Layout from "../Components/Layout/Layout";
import { Toaster } from "react-hot-toast";
import { useUser } from "../contexts/UserContext";
import { useApplicationManager } from "../contexts/ApplicationContext";
import Subjects from "../pages/Admin/Subjects/Subjects";
import Teachers from "../pages/Admin/Teachers/Teachers";
import Students from "../pages/Admin/Students/Students";

const RoutesWrapper = () => {
  const { user } = useUser();
  const { adminLogin } = useApplicationManager();

  if (adminLogin) {
    return (
      <>
        <Toaster
          toastOptions={{
            style: {
              background: "#181818",
              color: "#fff",
            },
          }}
        />

        <Routes>
          {user ? (
            <>
              <Route path="/" element={<HomeAdmin />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/students" element={<Students />} />
              <Route path="/auth" element={<Navigate to="/" replace />} />
            </>
          ) : (
            <>
              <Route path="/auth" element={<Authentication />} />
              <Route path="/subjects" element={<Authentication />} />
              <Route path="/teachers" element={<Authentication />} />
              <Route path="/students" element={<Authentication />} />
              <Route path="/" element={<Navigate to="/auth" replace />} />
            </>
          )}
        </Routes>
      </>
    );
  }

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: "#181818",
            color: "#fff",
          },
        }}
      />

      <Routes>
        {user ? (
          <>
            <Route path="/" element={<HomeTeacher />} />
            <Route path="/auth" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<Authentication />} />
            <Route path="/" element={<Navigate to="/auth" replace />} />
          </>
        )}
      </Routes>
    </>
  );
};

const ApplicationRoutes = () => {
  const { user } = useUser();

  if (user) {
    return (
      <Layout>
        <RoutesWrapper />
      </Layout>
    );
  }

  return <RoutesWrapper />;
};
export default ApplicationRoutes;
