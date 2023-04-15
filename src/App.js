import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="my-cart" element={<Cart />} />
        <Route path="details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
