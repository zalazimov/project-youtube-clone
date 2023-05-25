import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar bg-danger navbar-expand-sm">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Youtube
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="">
            <NavLink className="nav-link text-white" to="/">
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="nav-link text-white"
              // className={({ isActive }) => (isActive ? "active" : "")}
              to="/About"
            >
              About
            </NavLink>
          </li>
        </ul>
        <Searchbar />
      </div>
    </nav>
  );
}

export default Navbar;
