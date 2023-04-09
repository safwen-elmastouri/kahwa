import React from 'react'
import  "../style/productCard.css"
import {FaShoppingCart} from "react-icons/fa"

export default function ProuctCard({source,title,description} ) {
  return (
    <div className='card'>
      <div  className='product' >
        <div> 
      <FaShoppingCart color='' className='productCard__cart' style={{}} />

        </div>
        <img className='img-product' src={source}/>
        <h4> {title} </h4>
        <p id='desc' > {description} </p>
      <div>

      </div>

      </div>
    
    </div>
    
  )
}
