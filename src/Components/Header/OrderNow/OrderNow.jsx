import React from "react";
import { NavLink } from "react-router-dom";
import "./OrderNow.scss";

export default function OrderNow({ closeMenu }) {
  return (
    <NavLink to="/order" className="order-now" onClick={closeMenu}>
      Order Now
    </NavLink>
  );
}
