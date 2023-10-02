import React from "react";
import { NavLink } from "react-router-dom";
import "../css/sidebar.css";

const Sidebar = ({ sideBarToggle, handleToggleSidebar }) => {
  return (
    <div className="aside-container">
      <aside
        className={`${
          sideBarToggle ? "block bg-white dark:bg-[#181a1e]" : "hidden"
        } lg:block  fixed w-[170px]`}
      >
        <div className="toggle">
          <div className="close " id="close-btn">
            <span
              className="material-icons-sharp hover:text-primary"
              onClick={() => handleToggleSidebar(false)}
            >
              close
            </span>
          </div>
        </div>

        <div className={` ${sideBarToggle ? "" : "shadowed-box"} sidebar pt-4`}>
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
    </div>
  );
};

export default Sidebar;
