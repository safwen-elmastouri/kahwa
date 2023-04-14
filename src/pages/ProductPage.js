import React, { useState } from "react";
import NavBar from "../component/NavBar"
import { food,drink } from "../data/data";
import ProuctCard from "../component/ProuctCard";
import Footer from "../component/Footer";
import '../style/productPage.css'
import { useLocation } from "react-router-dom";


export default function ProductPage(){
    const [empty ,setEmpty]=useState(false)
    const location = useLocation();
    const state = location.state;
    const condition = state==="food"
    const [searchTerm ,setSearchTerm]=useState("")
    let data={}
    if (state==="food") {
    
        data=food
    }else {data=drink}
    return (
        <>
        <NavBar/>
         {condition ? <h3 className="menu-titile">Food menu</h3> : <h3 className="menu-titile" >Drinks Menu</h3>} 
   
         <div className="box">

        <input type="text" className="input" name="txt" placeholder="Search ..."
        onChange={(event) =>{
            setSearchTerm(event.target.value)
        }
    }
        />

</div>
   

      
     
        <div className="product-container" >
        {
            
            data.filter((val) =>{
                if (searchTerm==''){
                    return val
                }else if (val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val
                    
                }
               
                    
                
                
                
            }).map((val,key)=>{
                return(
                
                                <ProuctCard 
                                    source={val.source}
                                    title={val.title}
                                    description={val.description}
                                    val={val.val}
                                    price={val.price}
                                    />
            )
        })
            }
            </div>
            <Footer/>
            </>
  )
}
 