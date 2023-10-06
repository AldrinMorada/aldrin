import React from "react";
import RightSection from "./RightSection";

const Layout2 = ({ children }) => {
  return (
    <div className="flex w-full justify-end">
      <main className="w-full lg:w-[55%] px-4 lg:px-0">{children}</main>
      <div className="hidden lg:flex w-[22%]">
        <RightSection />
      </div>
    </div>
  );
};

export default Layout2;
