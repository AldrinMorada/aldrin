import React, { useState } from "react";
import RightSection from "./RightSection";

const Layout3 = ({ children }) => {
  const [sideBarToggle, setSidebarToggle] = useState(false);

  const handleToggleSidebar = (value) => {
    setSidebarToggle(value);
  };

  return (
    <>
      <div className="container">
        {/* do not delete empty div */}
        <div></div>
        <main>{children}</main>
        <RightSection handleToggleSidebar={handleToggleSidebar} />
      </div>
    </>
  );
};

export default Layout3;
