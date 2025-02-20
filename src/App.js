import React from "react";
import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Використовуємо HashRouter
import Home from "./Components/Home/Home";
import OrderPage from "./Components/OrderPage/OrderPage";
import MenuPage from "./Components/MenuPage/MenuPage";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  return (
    <Router>
      {" "}
      {/* HashRouter тут */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
