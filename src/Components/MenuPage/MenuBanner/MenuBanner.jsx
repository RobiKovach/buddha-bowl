import React from "react";
import "./MenuBanner.scss";
import OrderNow from "../../Header/OrderNow/OrderNow";

export default function MenuBanner() {
  return (
    <section className="menu-banner">
      <div className="menu-banner__wrapper">
        <div className="menu-banner__image">
          <img
            src={`${process.env.PUBLIC_URL}/img/menu-banner.png`}
            alt="Menu Banner"
            className="menu-banner__img"
          />
        </div>

        <div className="menu-banner__info">
          <h1 className="menu-banner__title">Our Menu</h1>
          <p className="menu-banner__description">
            Pick from one of our Chef-inspired combinations or create your own.
            Only the freshest ingredients and flavors. Choose your base,
            protein, and sauce. All proteins, vegetables, and toppings are
            gluten-free.
          </p>
          <OrderNow />
        </div>
      </div>
    </section>
  );
}
