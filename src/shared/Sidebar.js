import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../shared/images/am.png";
import "../css/sidebar.css";

const Sidebar = ({ sideBarToggle, handleToggleSidebar }) => {
  return (
    <div className="aside-container">
      <aside
        className={`${
          sideBarToggle ? "block bg-white dark:bg-[#181a1e]" : "hidden"
        } lg:block  `}
      >
        <div className="toggle">
          {/* <div className="logo">
            <img src={logo} alt="" />
            <h2>
              Aldrin<span className="danger">Pogi</span>
            </h2>
          </div> */}
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

          {/* <NavLink to="/admin/home">
            <span className="material-icons-sharp">home</span>
            <h3>Home</h3>
          </NavLink> */}

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

          {/* <NavLink to="/admin/settings">
            <span className="material-icons-sharp">settings</span>
            <h3>Settings</h3>
          </NavLink> */}

          {/* <a href="#">
            <span className="material-icons-sharp">add</span>
            <h3>New Logins</h3>
          </a> */}

          {/* <a href="#">
            <span className="material-icons-sharp">dashboard</span>
            <h3>Dashboard</h3>
          </a> */}

          {/* <NavLink to="/history">
            <span className="material-icons-sharp">receipt_long</span>
            <h3>History</h3>
          </NavLink> */}

          {/* <a href="#">
            <span className="material-icons-sharp">mail_outline</span>
            <h3>Tickets</h3>
            <span className="message-count">27</span>
          </a> */}

          {/* <a href="#">
            <span className="material-icons-sharp">inventory</span>
            <h3>Sale List</h3>
          </a> */}

          {/* <Link to="/logout">
            <span className="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </Link> */}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
