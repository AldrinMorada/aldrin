import React from "react";
import logo from "../shared/images/am.png";

import "../css/rightsection.css";

const RightSection = ({ handleToggleSidebar, sidebar }) => {
  return (
    <div className="right-section">
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
