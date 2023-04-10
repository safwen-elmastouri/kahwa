import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home"
import Contact from './component/Contact'
import ProductPage from "./component/ProductPage";
import Cart from "./component/Cart";
export default  function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="contact" element={<Contact/>}/>
    <Route path="product" element={ <ProductPage/> } />
    <Route path='my-cart' element={<Cart/>} />

    </Routes>
    
    </BrowserRouter>
  );
}

