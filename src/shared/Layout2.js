import React from "react";
import RightSection from "./RightSection";

const Layout2 = ({ children }) => {
  return (
    <div className="flex justify-between w-full">
      <div className="hidden lg:flex w-[20%]"></div>
      <main className="w-auto">{children}</main>
      <div className="hidden lg:flex w-[30%]">
        <RightSection />
      </div>
    </div>
  );
};

export default Layout2;
