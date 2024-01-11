import React from "react";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import Navigation from "../Navigation/Navigation";
import MenubarAdmin from "../Admin/Menubar/Menubar";
import { Toaster } from "react-hot-toast";
import FullScreenPopupCenter from "../reusables/FullScreenPopupCenter";
import Loading from "../reusables/Loading";
import { useDataStore } from "../../contexts/DataStoreContext";

const Layout = (props) => {
  const { isSmallScreen } = useApplicationManager();
  return isSmallScreen ? (
    <MobileLayout>{props.children}</MobileLayout>
  ) : (
    <DesktopLayout>{props.children}</DesktopLayout>
  );
};

const MobileLayout = (props) => {
  // const { isMobileMenuActive } = useApplicationManager();

  return (
    <>
      <FullScreenPopupCenter />
      <Navigation />
      <Toaster />
      {/* {isMobileMenuActive && <MenubarMobile />} */}
      <div className="w-full min-h-screen font-lexend mt-16 bg-black-main flex justify-center items-center text-white">
        {props.children}
      </div>
    </>
  );
};

const DesktopLayout = (props) => {
  const { user } = useDataStore();
  const { adminLogin } = useApplicationManager();
  const { isFetching, isUpdating } = useDataStore();
  return (
    <>
      {(isFetching || isUpdating) && <Loading />}
      <FullScreenPopupCenter />
      <Navigation />
      <Toaster />
      {adminLogin ? (
        <div className="w-full min-h-screen font-lexend bg-black-main flex justify-start items-start text-white mt-16">
          <div className="border-r-2 border-[#131313] w-[200px] h-screen fixed left-0">
            <MenubarAdmin />
          </div>
          <div className=" w-full pl-[200px]">{props.children}</div>
        </div>
      ) : (
        <div className="w-full min-h-screen font-lexend bg-black-main flex justify-start items-start text-white mt-16">
          <div className=" w-full   p-8 h-screen">{props.children}</div>
        </div>
      )}
    </>
  );
};

export default Layout;
