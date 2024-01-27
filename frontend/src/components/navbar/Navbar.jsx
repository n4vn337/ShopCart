import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { logo, cart_icon } from "../../assets";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="ZenCartify Logo" />
        <p>ZenCartify</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <NavLink to="/" end>
            Shop
          </NavLink>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("menu")}>
          <NavLink to="/mens">Menu</NavLink>
          {menu === "menu" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <NavLink to="/womens">Women</NavLink>
          {menu === "women" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <NavLink to="/kids">Kids</NavLink>
          {menu === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Shopping Cart" />
        </Link>
        <div className="nav-cart-count">1</div>
      </div>
    </div>
  );
};
