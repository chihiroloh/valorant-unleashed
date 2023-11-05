import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Home from "./Home";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Agents", link: "/agents" },
  ];

  return (
    <nav id="sses1">
      <ul className="topmenu">
        {navItems.map((item, index) => (
          <li key={index} className="topmenu-li">
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
