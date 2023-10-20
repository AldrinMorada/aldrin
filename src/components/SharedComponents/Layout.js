import React from "react";
import Sidebar from "./Sidebar";
import RightSection from "./RightSection";

const Layout = ({ children }) => {
  return (
    <div className="fixed flex justify-between w-full px-6">
      <Sidebar />
      <main className="h-[90vh] w-[calc(60vw-4rem)] overflow-y-scroll pb-40">
        {children}
      </main>
      <RightSection />
    </div>
  );
};

export default Layout;
