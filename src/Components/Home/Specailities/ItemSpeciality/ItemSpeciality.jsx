import React from "react";
import OrderNow from "../../../Header/OrderNow/OrderNow";

export default function ItemSpeciality({ product }) {
  return (
    <div className="specailities__item item-specailities">
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
  );
}
