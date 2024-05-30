import React from "react";
import { Link } from "react-router-dom";
import { RouteData } from "../App";

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          {RouteData.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
