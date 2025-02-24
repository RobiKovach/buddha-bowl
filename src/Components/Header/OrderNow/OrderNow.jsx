import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderNow.scss";

export default function OrderNow({ product }) {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/order", { state: { product } });
  };

  return (
    <button className="order-now" onClick={handleOrderNow}>
      Order Now
    </button>
  );
}
