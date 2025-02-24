import React from "react";
import "./Specailities.scss";
import products from "../../../data/product.json";
import OrderNow from "../../Header/OrderNow/OrderNow";

export default function Specailities() {
  const topProducts = products.slice(0, 3);

  return (
    <section className="specailities">
      <div className="specailities__wrapper">
        <div className="specailities__texts">
          <h2 className="specailities__title title">Our specialties</h2>
          <p className="specailities__description">
            We offer a variety of healthy and flavorful <br /> Vietnamese bowls
            made with fresh, tasteful and <br /> high-quality ingredients.
          </p>
        </div>
        <div className="specailities__items">
          {topProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="specailities__item item-specailities"
            >
              <img
                src={`${process.env.PUBLIC_URL}${product.image}`}
                alt={product.name}
                className="item-specailities__image"
              />
              <div className="item-specailities__box">
                <h3 className="item-specailities__name">{product.name}</h3>
                <p className="item-specailities__ingridiens">
                  {product.ingredients.join(", ")}
                </p>
                <OrderNow />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
