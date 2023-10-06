import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RightSection from "./RightSection";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="hidden lg:flex w-[20%]">
        <Sidebar />
      </div>
      <main className="w-auto">{children}</main>
      <div className="hidden lg:flex w-[30%]">
        <RightSection />
      </div>
    </div>
  );
};

export default Layout;
