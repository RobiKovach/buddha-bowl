import React from "react";
import { NavLink } from "react-router-dom";

export default function FooterTop() {
  const navLinks = [
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About" },
    { path: "/", label: "Join us" },
  ];

  return (
    <div className="footer-top__wrapper top-footer">
      <div className="top-footer__items">
        <div className="top-footer__item item-footer">
          <h5 className="item-footer__title">
            Sign up for Updates & Promotions
          </h5>
          <div className="item-footer__form form-footer">
            <input
              type="email"
              className="form-footer__input"
              placeholder="name@email.com"
            />
            <button className="form-footer__btn">Sign up</button>
          </div>
        </div>

        <nav className="top-footer__item item-footer">
          <ul className="item-footer__list">
            {navLinks.map((link, index) => (
              <li key={index} className="item-footer__li">
                <NavLink to={link.path} className="item-footer__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
