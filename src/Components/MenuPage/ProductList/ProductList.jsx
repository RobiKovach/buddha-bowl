import React from "react";
import ItemSpeciality from "../../Home/Specailities/ItemSpeciality/ItemSpeciality";

export default function ProductList({ products }) {
  return (
    <div className="menu-page__product-list menu-list">
      {products.map((product) => (
        <ItemSpeciality key={product.id} product={product} />
      ))}
    </div>
  );
}
