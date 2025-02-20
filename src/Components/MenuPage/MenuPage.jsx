import React from "react";
import products from "../../data/product.json";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MenuPage() {
  return (
    <>
      <Header />
      <section className="menu-page">
        <div className="menu-page__wrapper">
          <h1>Menu</h1>
          <div className="product-list">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <img
                  src={`${process.env.PUBLIC_URL}${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
                <p>
                  <strong>Ingredients:</strong> {product.ingredients.join(", ")}
                </p>
                <button className="order-button">{product.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
