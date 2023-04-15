import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProuctCard from "../component/ProuctCard";
import "../style/detailsPage.css";
import ReactStars from "react-rating-stars-component";

export default function ProductDetails() {
  const location = useLocation();
  const state = location.state;
  const { source, title, description, val, price } = state;
  console.log(description);
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="details-container">
      <div>
        <img id="image" src={source} />
      </div>
      <div className="details">
        <h3 id="product-title"> {title} </h3>
        <p id="price"> {price}dt </p>
        <p id="description"> {description} </p>
        <ReactStars size={24} value={val} activeColor="#ffd700" edit={false} />
        <form>
          <div
            class="value-button"
            id="decrease"
            onClick={() => handleDecrement()}>
            -
          </div>
          <input type="number" id="number" value={quantity} />
          <div
            className="value-button"
            id="increase"
            onClick={() => handleIncrement()}>
            +
          </div>
        </form>
      </div>
    </div>
  );
}
