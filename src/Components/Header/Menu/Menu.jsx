import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss";
import OrderNow from "../OrderNow/OrderNow";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Функція для перемикання меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("menu-open", !menuOpen);
  };

  // Функція для закриття меню після переходу
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
  };

  return (
    <div className={`header__menu menu ${menuOpen ? "menu-open" : ""}`}>
      <button
        type="button"
        className="menu__icon icon-menu"
        onClick={toggleMenu}
      >
        <span></span>
      </button>
      <nav className="menu__body">
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink to="/menu" className="menu__link" onClick={closeMenu}>
              Menu
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/about" className="menu__link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li className="menu__item">
            <OrderNow closeMenu={closeMenu} />
          </li>
        </ul>
      </nav>
    </div>
  );
}
