import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="my-cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
