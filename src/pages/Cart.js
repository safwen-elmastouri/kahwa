import React from 'react'
import NavBar from '../component/NavBar'
import { drink,food } from '../data/data';

import { useLocation } from "react-router-dom";


export default function Cart() {
  const data ={drink,food}
  
  const location = useLocation();
    const state = location.state;
  const render =(state,data)=>{
   console.log(state)

  }


  return (
    <div>
      <NavBar/>
      <h3>My cart</h3>
      {}
     
      
    </div>
  )
}
