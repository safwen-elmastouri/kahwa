import React, {memo,Component  } from "react";
import "../style/NavbarStyles.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
  
    return (
     <>
        <nav>

          <a >
            <Link to='/' style={{color: 'inherit', textDecoration: 'inherit'}}>
           <img id="logo-15" src={require('../images/logo.png')} style={{width:70,height:60}} />
          </Link>
          </a>
          <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}>
           <h3 id="title">Kahwa</h3>
          </Link>

          <div style={{ display:'flex', flexDirection:'row'}}>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <a className="active">
                  <Link to="/">
                  Home
                  </Link>
                </a>
              </li>
              <li>
                <Link to='/product' state='food' >
                <a >Food</a>
                </Link>
              </li>
              <li>
                <Link to='/product' state='drink' >
                <a >Drinks</a>
                </Link>
              </li>
              <li>
                <a >About</a>
              </li>
              <li>
                <Link to='/contact' >
                  <a >Contact</a>
                  </Link>
              </li>
            </ul>
            <div
              className={this.state.clicked ? "#navbar active" : "#navbar"} >
            </div>

          </div>
          <div className="cart" >
          <Link to='/my-cart' style={{color: 'inherit', textDecoration: 'inherit'}}>
            
            <ShoppingCart id="cart"  />
            </Link>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>

          </div>
        </nav>
      </>
    );
  }
}

export default memo(Navbar);
