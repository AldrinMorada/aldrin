import React from "react";
import Sidebar from "./Sidebar";
import RightSection from "./RightSection";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="w-full lg:w-[13%]">
        <Sidebar />
      </div>
      <main className="min-full lg:w-[65%] px-4 lg:px-0">{children}</main>
      <div className="hidden lg:flex w-[15%]">
        <RightSection />
      </div>
    </div>
  );
};

export default Layout;
