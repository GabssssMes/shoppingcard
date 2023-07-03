import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navbar(props) {
  return (
    <nav className={style.navbar}>
      <div className={style.title}>Clockshop</div>
      <NavLink className={style.element} to="/">
        Home
      </NavLink>
      <NavLink className={style.element} to="/products">
        Products
      </NavLink>
      <FaShoppingCart className={style.element} onClick={props.onClick} />
    </nav>
  );
}

export { Navbar };
