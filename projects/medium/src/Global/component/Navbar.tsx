import React from "react";
import { RouteData } from "../Data/route";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-600 text-white">
      <nav className="container mx-auto flex font-semibold">
        <ul>
          {RouteData?.map((item, index) => (
            <li key={index}>
              <Link
                to={item?.slug}
                className="py-4 px-6 hover:bg-slate-700 inline-block"
              >
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
