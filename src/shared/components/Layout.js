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
      <Sidebar
        sideBarToggle={sideBarToggle}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main>
        <div className="h-full overflow-y-auto">{children}</div>
      </main>
      <RightSection handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
};

export default Layout;
