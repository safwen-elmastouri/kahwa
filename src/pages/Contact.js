import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Contact(props) {
    const location = useLocation();
    const data = location.state;
    const cond = data=="food"
    
    return (
        <>
          
        <div>

            <p>ddd</p>

        </div>
        </>
  )
}
