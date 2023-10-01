import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from "../shared/images/am.png";
import Aldrin from "../shared/images/users/aldrin.jpg";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <nav className="top-0 sticky h-[6vh] bg-[#f5f7f9] dark:bg-[#161a1e] w-full shadow-lg flex justify-between items-center px-12 z-10">
      <section className="flex gap-2">
        <img src={logo} className="w-[2rem] h-[2rem]" alt="" />
        <span className="font-bold text-xl tracking-wide">
          Aldrin <span className="text-danger">Pogi</span>
        </span>
      </section>

      <section className="nav-container flex justify-center items-center gap-12 h-full">
        <NavLink className="text-black dark:text-white" to="/home">
          Home
        </NavLink>
        <NavLink className="text-black dark:text-white" to="/forums">
          Forums
        </NavLink>
        <NavLink className="text-black dark:text-white" to="/courses">
          Courses
        </NavLink>
        <NavLink className="text-black dark:text-white" to="/leaderboards">
          Leaderboards
        </NavLink>
        <NavLink className="text-black dark:text-white" to="/admin">
          Dashboard
        </NavLink>
      </section>

      <section>
        <div className="profile flex items-center gap-3">
          <Darkmode />

          <div className="info">
            <p>
              Hello <b>Aldrin</b>!
            </p>
          </div>

          <Link to={"/profile"}>
            <div className="profile-photo">
              <img src={Aldrin} alt="" />
            </div>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
