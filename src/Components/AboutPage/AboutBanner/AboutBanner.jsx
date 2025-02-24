import React from "react";
import "./AboutBanner.scss";
import OrderNow from "../../Header/OrderNow/OrderNow";

export default function MenuBanner() {
  return (
    <section className="menu-banner">
      <div className="menu-banner__wrapper">
        <div className="menu-banner__image">
          <img
            src={`${process.env.PUBLIC_URL}/img/about-banner.png`}
            alt="Menu Banner"
            className="menu-banner__img"
          />
        </div>

        <div className="menu-banner__info">
          <p className="menu-banner__description">
            We are a young, passionate team with a love for fresh, wholesome
            food and a deep respect for the environment. We bring a modern twist
            to traditional Vietnamese cuisine, creating nourishing bowls packed
            with vibrant flavors and sustainable ingredients.
          </p>
          <p className="menu-banner__description">Come visit us!</p>
        </div>
      </div>
    </section>
  );
}
