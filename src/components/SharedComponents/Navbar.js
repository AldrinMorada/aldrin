import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../shared/css/navbar.css";
import logo from "../../shared/images/am.png";
import Aldrin from "../../shared/images/users/aldrin.jpg";
import Darkmode from "./Darkmode";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="flex gap-2">
        <img src={logo} className="w-[2rem] h-[2rem]" alt="" />
        <span className="font-bold text-xl tracking-wide">
          Aldrin <span className="text-primary">Pogi</span>
        </span>
      </section>

      <section className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/forums">Forums</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/leaderboards">Leaderboards</NavLink>
        <NavLink to="/admin">Dashboard</NavLink>
      </section>

      <section>
        <div className="profile flex items-center gap-3">
          <Darkmode />

          <div className="info">
            <p>
              Hello <b>Aldrin</b>!
            </p>
          </div>

          <Link to={"/profile/about"}>
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
