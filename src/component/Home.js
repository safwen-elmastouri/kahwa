import React from 'react'
import './HomeStyles.css'
import Navbar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'

export default function Home(props) {
    return(
    <>
    <Navbar/>
    <section  >
        <div className='desc' >
            <h3>Discover our products , sweet and amazing </h3>
        <div id="bg">
            <img id="bg-img" src={require('../images/bg.png')} style={{width:550}} />
        </div>
        </div>
    </section>

    <section className='menu' >
        <div id='drinks'>
        <Link style={{color: 'inherit', textDecoration: 'inherit'}} to="/product" state={"drink"} >
        <img id='menu-img' src={require('../images/drinks.webp')}  />
        <div id='menu-desc'>
        <h4>Drinks</h4>
        <p>
             Nos pâtisseries et sandwiches sont fabriqués à partir
            </p>
            <button className='button' >Drinks</button>
        </div>
        </Link>
        </div>
        
        <div id='food'    >
            <Link style={{color: 'inherit', textDecoration: 'inherit'}} to="/product" state={"food"} >
            <img id='menu-img' src={require('../images/food.webp')}  />
            <div  id='menu-desc' >
                <h4>Food</h4>
                <p>Des cafés surprenants issus du monde entier. .</p>
                <button className='button' >Food</button>
            </div>
            </Link>
        </div>
    </section>
    <Footer/>
    </>
    )
}


