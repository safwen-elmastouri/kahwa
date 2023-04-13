import React,{memo} from 'react';
import {  Link } from "react-router-dom";
import '../style/footerStyle.css'

import fb from '../images/social-media/fb.png'
import yt from '../images/social-media/yt.png'
import tw from '../images/social-media/tw.png'


function Footer() {
    const date = new Date()
    return (
            <dic className="container">
            <div className='service' >
            <h4>Our services</h4>
                <div>
               <a  > <p>Drinks</p> </a> 
               <a  > <p>Food</p> </a> 
               </div>
            </div>

            <div className='service' > 
                <a  > <h4>About us</h4> </a> 
                <a  > <h4>Contact us</h4> </a> 
            </div>
            <div className='sm-container' >
                <h4>Social media</h4>
               <div>
                <a  > <img id='social-media' src={fb} /></a> 
                <a  > <img id='social-media' src={yt} /></a> 
                <a  > <img id='social-media' src={tw} /></a> 
                </div>
            </div>
           </dic>
    );
}

export default memo(Footer);