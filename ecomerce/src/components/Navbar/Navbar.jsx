import React from "react";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalInCart = useSelector((s)=>s.product.products);
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
            <Link to="/cart" className="relative">
              <span className="absolute -top-3 -right-3 bg-red-600 rounded-[50%] h-5 w-5 text-xs text-center text-white leading-5">{totalInCart.length}</span>
              <LuShoppingCart />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
