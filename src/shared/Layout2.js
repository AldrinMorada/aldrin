import React from "react";
import RightSection from "./RightSection";

const Layout2 = ({ children }) => {
  return (
    <div className="fixed flex justify-between w-full px-6">
      <div className="lg:w-[6rem]"></div>
      <main className="h-[90vh] w-full lg:w-[calc(90vw-24rem)] overflow-y-scroll pb-40">
        {children}
      </main>
      <RightSection />
    </div>
  );
};

export default Layout2;
