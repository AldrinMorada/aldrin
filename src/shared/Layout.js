import React from "react";
import Sidebar from "./Sidebar";
import RightSection from "./RightSection";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="w-full lg:w-[20%]">
        <Sidebar />
      </div>
      <main className="min-full lg:w-[50%] px-4 lg:px-0">{children}</main>
      <div className="hidden lg:flex w-[30%]">
        <RightSection />
      </div>
    </div>
  );
};

export default Layout;
