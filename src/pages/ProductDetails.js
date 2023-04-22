import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ProuctCard from "../component/ProuctCard";
import ReactStars from "react-rating-stars-component";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import "../style/detailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
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
        <section className="delivery-container">
          <div>
            <p>delivry & returns</p>
          </div>
          <label>
            <p>select adress</p>
            <select
              required=""
              classNames="sel"
              id="fi-regionId"
              name="regionId"
              aria-label="Région">
              <option value="" disabled="">
                Sélectionner
              </option>
              <option value="2">Ariana</option>
              <option value="8">Béja</option>
              <option value="3">Ben Arous</option>
              <option value="7">Bizerte</option>
              <option value="22">Gabes</option>
              <option value="19">Gafsa</option>
              <option value="9">Jendouba</option>
              <option value="12">Kairouan</option>
              <option value="13">Kasserine</option>
              <option value="21">Kebili</option>
              <option value="4">La Manouba</option>
              <option value="10">Le Kef</option>
              <option value="17">Mahdia</option>
              <option value="23">Médenine</option>
              <option value="16">Monastir</option>
              <option value="5">Nabeul</option>
              <option value="18">Sfax</option>
              <option value="14">Sidi Bouzid</option>
              <option value="11">Siliana</option>
              <option value="15">Sousse</option>
              <option value="24">Tataouine</option>
              <option value="20">Tozeur</option>
              <option value="1" selected="">
                Tunis
              </option>
              <option value="6">Zaghouan</option>
            </select>
          </label>
        </section>
      </section>
      <section className="details-container">
        <h2>description</h2>
        {description}
      </section>
      <Footer />
    </div>
  );
}
