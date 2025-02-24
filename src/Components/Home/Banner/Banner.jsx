import React from "react";
import "./Banner.scss";

export default function Banner() {
  return (
    <>
      <section className="banner">
        <div className="banner__wrapper">
          <div className="banner__texts">
            <h1 className="banner__title">
              Healthy & Authentic Vietnamese Bowls
            </h1>
            <p className="banner__description">
              Fresh ingredients, delicious flavours.
            </p>
          </div>
          <div className="banner__img">
            <img
              src={`${process.env.PUBLIC_URL}/img/banner-img.png`}
              alt="banner"
              className="banner__image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
