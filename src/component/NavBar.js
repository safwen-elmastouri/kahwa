import React, {memo,Component  } from "react";
import "../style/NavbarStyles.css";
import { Link } from "react-router-dom";

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
            <Link to='/'>
           <img id="logo-15" src={require('../images/logo.png')} style={{width:70,height:60}} />
          </Link>
          </a>

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