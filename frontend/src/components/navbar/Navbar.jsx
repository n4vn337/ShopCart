import { useState } from "react";

import "./navbar.scss";
// import logo from "../../assets/logo.png";
// import cart_icon form ""
import { logo, cart_icon } from "../../assets";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>ZenCartify</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          Shop
          {menu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}
        >
          Menu
          {menu === "menu" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          Women
          {menu === "women" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          Kids
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">1</div>
      </div>
    </div>
  );
};
