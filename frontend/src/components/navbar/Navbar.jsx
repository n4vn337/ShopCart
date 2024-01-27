import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("menu");
          }}
        >
          <Link to="/mens">Menu</Link>
          {menu === "menu" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens">Women</Link>
          {menu === "women" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">1</div>
      </div>
    </div>
  );
};
