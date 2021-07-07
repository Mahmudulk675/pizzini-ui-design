import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="https://www.foodpanda.com/">Home</a>
          </li>
          <li>
            <a href="https://www.foodpanda.com/">Menu</a>
          </li>
          <li>
            <a href="https://www.foodpanda.com/">Shop</a>
          </li>
          <li>
            <a href="https://www.foodpanda.com/">News</a>
          </li>
          <li>
            <a href="https://www.foodpanda.com/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
