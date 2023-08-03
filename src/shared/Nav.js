import React, { useEffect, useState } from "react";
import Aldrin from "../shared/images/users/aldrin.jpg";
import logo from "../shared/images/am.png";
import "../css/rightsection.css";
import Darkmode from "./Darkmode";

const Nav = ({ handleToggleSidebar }) => {
  return (
    <div className="right-section">
      <div className="nav">
        <button className="" id="menu-button">
          <span
            className="material-icons-sharp"
            onClick={() => handleToggleSidebar(true)}
          >
            menu
          </span>
        </button>

        <Darkmode />
        <div className="profile">
          <div className="info">
            <p>
              Hello <b>Aldrin</b>!
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src={Aldrin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
