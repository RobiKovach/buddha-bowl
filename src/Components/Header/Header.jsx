import React from "react";
import Menu from "./Menu/Menu";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <section className="header">
        <div className="header__wrapper">
          <NavLink className="header__logo" to="/">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="Logo" />
          </NavLink>
          <Menu />
        </div>
      </section>
    </>
  );
}
