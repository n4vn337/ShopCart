import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { logo, cart_icon } from "../../assets";
import { ShopContext } from "../../context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  useEffect(() => {
    // Update the active menu based on the current route
    const currentPath = window.location.pathname;
    if (currentPath === "/mens") {
      setMenu("mens");
    } else if (currentPath === "/womens") {
      setMenu("women");
    } else if (currentPath === "/kids") {
      setMenu("kids");
    } else {
      setMenu("shop");
    }
  }, []);

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
        <li onClick={() => setMenu("mens")}>
          <NavLink to="/mens">Mens</NavLink>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("women")}>
          <NavLink to="/womens">Womens</NavLink>
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
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
