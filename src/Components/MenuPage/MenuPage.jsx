import React, { useState } from "react";
import products from "../../data/product.json";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductList from "./ProductList/ProductList";
import "./MenuPage.scss";
import MenuBanner from "./MenuBanner/MenuBanner";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <Header />
      <MenuBanner />
      <section className="menu-page">
        <div className="menu-page__wrapper">
          <div className="menu-page__category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`menu-page__category-button ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <ProductList products={filteredProducts} />
        </div>
      </section>
      <Footer />
    </>
  );
}
