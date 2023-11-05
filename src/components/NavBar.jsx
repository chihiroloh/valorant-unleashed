import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Home from "./Home";

const NavBar = () => {
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Agents", link: "/agents" },
    { name: "Classes", link: "/classes" },
  ];
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/agents">Agents</Link>
      </li>
      {/* Add more navigation links as needed */}
    </ul>
  </nav>;
  return (
    <div id="sses1">
      {" "}
      {/* Make sure this ID matches the one in your CSS */}
      <ul className="topmenu">
        {navItems.map((item, index) => (
          <li key={index} className="topmenu-li">
            <a href={item.link}>{item.name}</a>
            {/* Assuming each nav item could have a sub-menu */}
            <ul className="submenu">
              {/* Submenu items would also be mapped here */}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
