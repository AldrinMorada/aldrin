import React, { useState } from "react";
import Sidebar from "./Sidebar";
import RightSection from "./RightSection";

const Layout = ({ children }) => {
  const [sideBarToggle, setSidebarToggle] = useState(false);

  const handleToggleSidebar = (value) => {
    setSidebarToggle(value);
  };

  return (
    <div className="container">
      <div className="hidden lg:flex">
        <Sidebar
          sideBarToggle={sideBarToggle}
          handleToggleSidebar={handleToggleSidebar}
        />
      </div>
      <main>
        <div className="h-full overflow-y-auto">{children}</div>
      </main>
      <div className="hidden lg:flex">
        <RightSection handleToggleSidebar={handleToggleSidebar} />
      </div>
    </div>
  );
};

export default Layout;
