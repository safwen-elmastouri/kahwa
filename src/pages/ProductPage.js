import React from "react";
import NavBar from "../component/NavBar"
import { food,drink } from "../data/data";
import ProuctCard from "../component/ProuctCard";
import Footer from "../component/Footer";
import '../style/productPage.css'
import { useLocation } from "react-router-dom";


export default function ProductPage(){
    const location = useLocation();
    const state = location.state;
    const cond = state==="food"
    let data={}
    if (state==="food") {
    
        data=food
    }else {data=drink}
    return (
        <>
        <NavBar/>
         {cond ? <h3 className="menu-titile">Food menu</h3> : <h3 className="menu-titile" >Drinks Menu</h3>} 
        <div className="product-container" >
        {
            data.map(item =>
                <ProuctCard 
                    source={item.source}
                    title={item.title}
                    description={item.description}
                    val={item.val}
                    price={item.price}
                    />
                )
            }
            </div>
            <Footer/>
            </>
  )
}
 