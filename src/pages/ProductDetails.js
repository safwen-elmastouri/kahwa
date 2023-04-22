import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import ProuctCard from "../component/ProuctCard";
import ReactStars from "react-rating-stars-component";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import "../style/detailsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, useFormik } from "formik";

import * as Yup from "yup";

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

  const validation = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")

      .min(3, "Too Short!")
      .max(25, "enter valid name")
      .required("First name is required"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
    address: Yup.string().required("Address is required"),
    zipCode: Yup.number().required("Zip code is required"),
    city: Yup.string()
      .required("City is required")
      .min(3, "Too Short!")
      .matches(/^[A-Za-z ]*$/, "Please enter valid city name"),

    state: Yup.string().required("State is required")
      .min(3, "Too Short!")
      .matches(/^[A-Za-z ]*$/, "Please enter valid city name"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      zipCode: "",
      city: "",
      state: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
          <form onSubmit={formik.handleSubmit} name="devForm">
            <div className="shipping-container">
              <h1>Shipping</h1>
              <p>Please enter your shipping details.</p>
              <hr />
              <div className="shipping-form">
                <div className="fields fields--2">
                  <label className="field">
                    <span className="field__label" for="firstname">
                      First name
                    </span>
                    <input
                      className="field__input"
                      id="firstname"
                      name="firstName"
                      placeholder="e.g. Foulen"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    {formik.errors.firstName ? (
                      <div className="error">{formik.errors.firstName}</div>
                    ) : null}
                  </label>
                  <label className="field">
                    <span className="field__label" for="lastname">
                      Last name
                    </span>
                    <input
                      placeholder="e.g. Ben Foulen"
                      className="field__input"
                      type="text"
                      id="lastname"
                      name="lastName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                  </label>
                </div>
                <label className="field">
                  <span className="field__label" for="address">
                    Address
                  </span>
                  <input
                    placeholder="e.g avenue 5 aout"
                    className="field__input"
                    type="text"
                    id="address"
                    name="address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="error">{formik.errors.address}</div>
                  ) : null}
                </label>

                <div className="fields fields--3">
                  <label className="field">
                    <span className="field__label" for="zipcode">
                      Zip code
                    </span>
                    <input
                      placeholder="e.g. 3000"
                      className="field__input"
                      type="number"
                      id="zipcode"
                      name="zipCode"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.zipCode}
                    />
                    {formik.touched.zipCode && formik.errors.zipCode ? (
                      <div className="error">{formik.errors.zipCode}</div>
                    ) : null}
                  </label>
                  <label className="field">
                    <span className="field__label" for="city">
                      City
                    </span>
                    <input
                      placeholder="e.g. Marsa"
                      className="field__input"
                      type="text"
                      id="city"
                      name="city"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? (
                      <div className="error">{formik.errors.city}</div>
                    ) : null}
                  </label>
                  <label className="field">
                    <span className="field__label" for="state">
                      State
                    </span>

                    <select
                      classNames="sel"
                      id="fi-regionId"
                      name="state"
                      aria-label="Région"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}>
                      value={formik.values.state}
                      <option value="" disabled=""></option>
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
                    {formik.touched.state && formik.errors.state ? (
                      <div className="error">{formik.errors.state}</div>
                    ) : null}
                  </label>
                </div>
              </div>
              <input type="submit" className="shipping-button" />
            </div>
          </form>
        </section>
      </section>

      <Footer />
    </div>
  );
}
