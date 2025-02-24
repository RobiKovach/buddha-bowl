import React from "react";
import "./Specailities.scss";
import products from "../../../data/product.json";
import ItemSpeciality from "./ItemSpeciality/ItemSpeciality";

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
          {topProducts.map((product) => (
            <ItemSpeciality key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
