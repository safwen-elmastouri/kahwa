import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home"
import Contact from './component/Contact'
import Product from "./component/Product";

export default  function App () {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="contact" element={<Contact/>}/>
    <Route path="product" element={ <Product/> } />
    </Routes>
    
    </BrowserRouter>
  );
}

