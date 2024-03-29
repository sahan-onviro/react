import React from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="container mx-auto flex flex-row flex-wrap justify-between items-center p-3">
          <figure className="logo">
            <img src="" alt="logo" />
          </figure>
          <ul className="flex gap-3">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
          </ul>
          <div className="cart-wrapper">
            <Link to="/cart">
              <LuShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
