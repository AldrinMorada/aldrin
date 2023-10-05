import React from "react";
import RightSection from "./RightSection";

const Layout2 = ({ children }) => {
  return (
    <div className="container">
      {/* do not delete empty div */}
      <div></div>
      <main>{children}</main>
      <RightSection />
    </div>
  );
};

export default Layout2;
