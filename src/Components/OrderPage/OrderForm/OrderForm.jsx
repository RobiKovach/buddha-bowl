import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Додаємо для редиректу
import "./OrderForm.scss";

export default function OrderForm({ selectedProducts, onClose }) {
  const navigate = useNavigate(); // ✅ Використовуємо для редиректу на головну
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      customer: formData,
      products: selectedProducts.map(({ name, quantity }) => ({
        name,
        quantity,
      })),
    };

    try {
      const response = await fetch(
        "https://hook.eu2.make.com/thjprjlpvhj4bv65sretqgheffjef5hv",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      if (response.ok) {
        localStorage.removeItem("selectedProducts"); // ✅ Очищуємо кошик
        onClose(); // Закриваємо форму
        alert("Thank you! Your order has been submitted."); // ✅ Повідомлення про успішне замовлення
        navigate("/"); // ✅ Переходимо на головну сторінку
      } else {
        alert("Error sending order. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="order-form__overlay">
      <div className="order-form">
        <h2>Complete Your Order</h2>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Order"}
          </button>
          <button type="button" onClick={onClose} className="cancel-btn">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
