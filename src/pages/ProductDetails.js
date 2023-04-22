import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ProuctCard from "../component/ProuctCard";
import ReactStars from "react-rating-stars-component";

export default function ProductDetails() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  const state = location.state;
  const { source, title, description, val, price } = state;
  console.log(description);
  const [quantity, setQuantity] = useState(1);
  const [totalprice, setTotalPrice] = useState(price);

  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(count + 1);
    setTotalPrice(totalprice + price);
  }

  function handleDecrement() {
    if (count > 1) {
      setCount(count - 1);
      setTotalPrice(totalprice - price);
    } else if (count == 1) {
      setTotalPrice(price);
    }
  }

  const handleDecrementCondition = () => {};

  return (
    <div>
      <NavBar />
      <h3>Product details</h3>
      <span className="navigate">
        <p style={{ cursor: "pointer" }}>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            Home
          </Link>
        </p>
        <p style={{ cursor: "pointer" }} onClick={goBack}>
          / Product
        </p>
        <p style={{ cursor: "pointer" }}> / {title} </p>
      </span>
      <section className="container-product">
        <section className="details-container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <img id="image" src={source} />
          </div>
          <div className="details">
            <h3 id="product-title"> {title} </h3>
            <div className="rating">
              <ReactStars
                size={15}
                value={val}
                activeColor="#ffd700"
                edit={false}
              />
              <p id="review">(4 reviews) </p>
            </div>
            <p className="offre">special offre</p>
            <p id="price-product">{price}dt</p>
            <p className="discount">4.00 dt</p>
            <p id="delivry"> livraison à partir de 4.00 TND</p>
            <button className="add">Add to Cart</button>
          </div>
        </section>
      </section>
      <section className="delivery-container">
        <div>
          <p>delivry & returns</p>
        </div>
      </section>
    </div>
  );
}
