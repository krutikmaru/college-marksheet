import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApplicationManagerProvider } from "./contexts/ApplicationContext";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter } from "react-router-dom";
import ApplicationRoutes from "./Routes/ApplicationRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApplicationManagerProvider>
      <UserProvider>
        <BrowserRouter>
          <ApplicationRoutes>
            <App />
          </ApplicationRoutes>
        </BrowserRouter>
      </UserProvider>
    </ApplicationManagerProvider>
  </React.StrictMode>
);
