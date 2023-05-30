import React from "react";
import { NavLink } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar bg-danger navbar-expand-sm mb-5">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand text-white fs-2
          mx-5 link-underline link-underline-opacity-0"
          to="/"
        >
          Youtube
        </NavLink>
        <ul className="navbar-nav me-auto mb-2 mb-sm-2">
          <li className="">
            <NavLink className="nav-link text-white fs-4" to="/">
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              className="nav-link text-white fs-4"
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
