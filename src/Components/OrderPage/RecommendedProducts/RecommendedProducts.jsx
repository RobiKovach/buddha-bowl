import React from "react";
import ItemSpeciality from "../../Home/Specailities/ItemSpeciality/ItemSpeciality";
import "./RecommendedProducts.scss";

export default function RecommendedProducts({ products }) {
  return (
    <section className="recommended-products">
      <div className="recommended-products__wrapper">
        <h2 className="recommended-products__title title">You may also like</h2>
        <div className="recommended-products__items">
          {products.map((product) => (
            <ItemSpeciality key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
