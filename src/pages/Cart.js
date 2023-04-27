import React, { useState } from "react";
import NavBar from "../component/NavBar";
import ReactStars from "react-rating-stars-component";
import { drink, food } from "../data/data";
import { useLocation } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import "../style/cart.css";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
export default function Cart() {
  const location = useLocation();
  const state = location.state;

  const { source, title, description, val, price } = state;

  console.log(state);
  const [count, setCount] = useState(1);
  const [totalprice, setTotalPrice] = useState(price);

  function incrementCount() {
    setCount(count + 1);
    setTotalPrice(totalprice + price);
  }

  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice(totalprice - price);
    } else if (count == 1) {
      setTotalPrice(price);
    }
  }
  return (
    <>
      <NavBar />
      <h3>My cart</h3>
      {source == null ? (
        <>ddd</>
      ) : (
        <div className="cart-container">
          <div className="pic">
            <img src={source} />
          </div>
          <div className="detail">
            <h4> {title} </h4>
            <div className="rating">
              <ReactStars
                size={15}
                value={val}
                activeColor="#ffd700"
                edit={false}
              />
              <p id="review">(4 reviews) </p>
            </div>
            <p id="price"> {price} dt</p>
            <p className="quatite"></p>
            <div className="quantity">
              <button onClick={decrementCount}>-</button>
              <p>{count}</p>
              <button onClick={incrementCount}>+</button>
            </div>
            <p
              id="price"
              style={{
                color: "red",
                marginBottom: "25px",
                fontSize: "2rem",
                fontStyle: "-moz-initial",
              }}>
              {totalprice.toFixed(1)}dt
              <Link
                to="/payment"
                state={state}
                style={{ color: "inherit", textDecoration: "inherit" }}>
                <div style={{display:'flex', justifyContent:'center' ,padding:'20px'}} >
                  <button className="buy">buy</button>
                </div>
              </Link>
            </p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
