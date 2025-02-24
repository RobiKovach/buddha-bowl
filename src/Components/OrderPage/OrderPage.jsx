import React, { useEffect, useState, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import products from "../../data/product.json";
import RecommendedProducts from "./RecommendedProducts/RecommendedProducts";
import OrderForm from "./OrderForm/OrderForm";
import "./OrderPage.scss";

export default function OrderPage() {
  const location = useLocation();
  const initialProduct = location.state?.product;
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      const savedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      setSelectedProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    if (!initialProduct) return;

    setSelectedProducts((prevProducts) => {
      const savedProducts =
        JSON.parse(localStorage.getItem("selectedProducts")) || [];
      const isAlreadySaved = savedProducts.some(
        (p) => p.name === initialProduct.name
      );
      if (!isAlreadySaved) {
        const updatedProducts = [
          ...savedProducts,
          { ...initialProduct, quantity: 1 },
        ];
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(updatedProducts)
        );
        return updatedProducts;
      }
      return savedProducts;
    });
  }, [initialProduct]);

  const increaseQuantity = (productName) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.name === productName
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const decreaseQuantity = (productName) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.name === productName && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const removeProduct = (productName) => {
    setSelectedProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (p) => p.name !== productName
      );

      if (updatedProducts.length > 0) {
        localStorage.setItem(
          "selectedProducts",
          JSON.stringify(updatedProducts)
        );
      } else {
        localStorage.removeItem("selectedProducts");
      }

      return updatedProducts;
    });
  };

  const recommendedProducts = useMemo(() => {
    return products
      .filter((p) => !selectedProducts.some((sp) => sp.name === p.name))
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [selectedProducts]);

  const addRecommendedProduct = (product) => {
    const updatedProducts = [...selectedProducts, { ...product, quantity: 1 }];
    setSelectedProducts(updatedProducts);
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
  };

  const handleConfirmAll = () => {
    if (selectedProducts.length > 0) {
      setShowForm(true);
    }
  };

  return (
    <>
      <Header />
      <section className="order-page">
        <div className="order-page__wrapper">
          {selectedProducts.length > 0 ? (
            <>
              <h1 className="order-page__title title">Your Orders</h1>
              <div className="order-page__list">
                {selectedProducts.map((product) => (
                  <div key={product.name} className="order-page__item">
                    <img
                      src={`${process.env.PUBLIC_URL}${product.image}`}
                      alt={product.name}
                      className="order-page__image"
                    />
                    <p className="order-page__description">
                      <strong>{product.name}</strong>
                    </p>
                    <p className="order-page__description">
                      {product.ingredients.join(", ")}
                    </p>

                    <div className="order-page__quantity">
                      <button
                        disabled={product.quantity <= 1}
                        onClick={() => decreaseQuantity(product.name)}
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button onClick={() => increaseQuantity(product.name)}>
                        +
                      </button>
                    </div>

                    <button
                      className="order-page__remove"
                      onClick={() => removeProduct(product.name)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button
                className="order-page__confirm"
                onClick={handleConfirmAll}
              >
                Confirm All Orders
              </button>
            </>
          ) : (
            <p className="order-page__no-product">
              No product selected. Please choose one of our recommended options.
            </p>
          )}
        </div>
      </section>

      <RecommendedProducts
        products={recommendedProducts}
        onAddProduct={addRecommendedProduct}
      />

      {showForm && (
        <OrderForm
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          onClose={() => setShowForm(false)}
        />
      )}

      <Footer />
    </>
  );
}
