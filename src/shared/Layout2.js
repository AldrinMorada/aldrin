import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";

import "../App.css";

const Layout2 = ({ children }) => {
  const [sideBarToggle, setSidebarToggle] = useState(false);

  const handleToggleSidebar = (value) => {
    setSidebarToggle(value);
  };

  return (
    <div className="container2">
      <Sidebar
        sideBarToggle={sideBarToggle}
        handleToggleSidebar={handleToggleSidebar}
      />
      <main>{children}</main>
      <Nav handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
};

export default Layout2;
