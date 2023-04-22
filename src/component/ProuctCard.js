import React, { memo, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Button from "@mui/material-next/Button";
import "../style/productCard.css";

function ProuctCard(props) {
  const [addProduct, setAddProduct] = useState([]);

  const { id, source, title, description, val, price } = props;
  return (
    <div className="card" id={id}>
      <Link
        to="/details"
        state={props}
        style={{ color: "inherit", textDecoration: "inherit" }}>
        <div className="product">
          <ShoppingCartIcon className="productCard__cart" />

          <img className="img-product" src={source} />
          <h4> {title} </h4>
          <ReactStars
            size={24}
            value={val}
            activeColor="#ffd700"
            edit={false}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p id="price"> {price} </p>
            <p id="price" style={{ fontSize: "15px" }}>
              dt
            </p>
          </div>
          <div id="product-bottom">
            <Button className="add-btn" color="tertiary" variant="elevated">
              Add to cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default memo(ProuctCard);
