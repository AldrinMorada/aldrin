import React from "react";
import { NavLink } from "react-router-dom";
import "./css/sidebar.css";

const   Sidebar = () => {
  return (
    <aside className="">
      <div className="sidebar shadowed-box pt-4">
        <NavLink to="/admin/analytics">
          <span className="material-icons-sharp">insights</span>
          <h3>Analytics</h3>
        </NavLink>

        <NavLink to="/admin/users">
          <span className="material-icons-sharp">person_outline</span>
          <h3>Users</h3>
        </NavLink>

        <NavLink to="/admin/trainingbonds">
          <span className="material-icons-sharp">handshake</span>
          <h3>Bonds</h3>
        </NavLink>

        <NavLink to="/admin/test">
          <span className="material-icons-sharp">report_gmailerrorred</span>
          <h3>Test</h3>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
