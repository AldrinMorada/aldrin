import React from "react";
import Aldrin from "../shared/images/users/aldrin.jpg";
import logo from "../shared/images/am.png";
import Darkmode from "./Darkmode";

import "../css/rightsection.css";
import { Link } from "react-router-dom";

const RightSection = ({ handleToggleSidebar, sidebar }) => {
  return (
    <div className="right-section">
      <div className="nav">
        <button className="" id="menu-button">
          <span
            className="material-icons-sharp hover:text-white"
            onClick={() => handleToggleSidebar(true)}
          >
            {sidebar ? "close" : "menu"}
          </span>
        </button>

        {/* <Darkmode /> */}
        {/* 
        <div className="profile">
          <div className="info">
            <p>
              Hello <b>Aldrin</b>!
            </p>
            <small className="text-muted">Admin</small>
          </div>

          <Link to={"/profile"}>
            <div className="profile-photo">
              <img src={Aldrin} alt="" />
            </div>
          </Link>
        </div>
         */}
      </div>

      {/* end of nav */}

      <div className="shadowed-box user-profile">
        <div className="logo">
          <img src={logo} alt="" />
          <h2>AldrinPogi</h2>
          <p>Developer 1 - Java Fullstack</p>
        </div>
      </div>

      <div className="reminders">
        <div className="header">
          <h2>Reminders</h2>
          <span className="shadowed-box material-icons-sharp">
            notifications_none
          </span>
        </div>

        <div className="shadowed-box notification">
          <div className="icon">
            <span className="material-icons-sharp">volume_up</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text-muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>

        <div className="shadowed-box notification deactive">
          <div className="icon">
            <span className="material-icons-sharp">edit</span>
          </div>
          <div className="content">
            <div className="info">
              <h3>Workshop</h3>
              <small className="text-muted">08:00 AM - 12:00 PM</small>
            </div>
            <span className="material-icons-sharp">more_vert</span>
          </div>
        </div>

        <div className="shadowed-box notification add-reminder">
          <div>
            <span className="material-icons-sharp">add</span>
          </div>
          <h3>Add Reminder</h3>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
