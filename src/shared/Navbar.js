import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav className="top-0 sticky h-[6vh] w-full shadowed-box flex justify-between items-center">
      <div>logo</div>
      <div className="nav-container flex justify-center items-center gap-12 h-full">
        <NavLink className="active:bg-red-500" to="/admin/home">
          Home
        </NavLink>
        <NavLink to="/admin/forums">Forums</NavLink>
        <NavLink to="/admin/courses">Courses</NavLink>
        <NavLink to="/admin/leaderboards">Leaderboards</NavLink>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
