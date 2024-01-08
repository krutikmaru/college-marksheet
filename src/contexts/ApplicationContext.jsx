import React, { createContext, useContext, useEffect, useState } from "react";

const ApplicationManagerContext = createContext();

export const useApplicationManager = () => {
  const context = useContext(ApplicationManagerContext);
  if (!context) {
    throw new Error(
      "useApplicationManager must be used within a ApplicationManagerProvider"
    );
  }
  return context;
};

export const ApplicationManagerProvider = ({ children }) => {
  const [adminLogin, setAdminLogin] = useState(true);
  const [selectedMenubarItemId, setSelectedMenubarItemId] = useState(
    "5225da39369d45d7bc3c05fd03f61b69"
  );
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 850);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [fullScreenPopCenter, setFullScreenPopCenter] = useState({
    isActive: false,
    Component: null,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 850);
      if (window.innerWidth <= 850) {
        deactivatePopupCenter();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const activatePopupCenter = (component) => {
    setFullScreenPopCenter({ isActive: true, component });
  };
  const deactivatePopupCenter = () => {
    setFullScreenPopCenter({ isActive: false, component: null });
  };

  const value = {
    adminLogin,
    setAdminLogin,

    fullScreenPopCenter,
    setFullScreenPopCenter,

    isMobileMenuActive,
    setIsMobileMenuActive,

    selectedMenubarItemId,
    setSelectedMenubarItemId,
    isSmallScreen,

    activatePopupCenter,
    deactivatePopupCenter,
  };
  return (
    <ApplicationManagerContext.Provider value={value}>
      {children}
    </ApplicationManagerContext.Provider>
  );
};
