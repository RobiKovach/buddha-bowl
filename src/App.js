import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import OrderPage from "./Components/OrderPage/OrderPage";
import MenuPage from "./Components/MenuPage/MenuPage";
import AboutPage from "./Components/AboutPage/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
