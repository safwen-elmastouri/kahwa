import React, { useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import "../style/contact.css";
import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const [clicked ,setClicked]=useState(false)
  const validation = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(3, "Too Short first name ! ")
      .max(25, "enter valid name")
      .required("First name is required"),
    lastName: Yup.string()
      .required("Last name is required")
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(2, "short last name"),
    email: Yup.string().email(),
    zipCode: Yup.number().required("Zip code is required"),
    city: Yup.string()
      .required("City is required")
      .min(3, "Too Short!")
      .matches(/^[A-Za-z ]*$/, "Please enter valid city name"),

    state: Yup.string().required("State is required"),
    message: Yup.string()
      .min(3, "Too Short first name ! ")
      .required("First name is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      zipCode: "",
      city: "",
      state: "",
      message:'',
    },
    validationSchema: validation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <NavBar />
      {clicked ? (
        <section className="clicked"><p> Message sent! <br/> Thanks for contact us </p></section>
      ) : (
        <div className="contact-form">
          <section className="delivery-container">
            <form onSubmit={formik.handleSubmit} name="devForm">
              <div className="shipping-container">
                <h1>Contact us</h1>
                <p>Please enter your valid information</p>
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
                    </label>
                    {formik.errors.firstName ? (
                      <div className="error">{formik.errors.firstName}</div>
                    ) : null}
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
                        value={formik.values.lastName}
                      />
                    </label>
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="error">{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                  <label className="field">
                    <span s className="field__label" for="email">
                      email
                    </span>
                    <input
                      placeholder="e.g exemple@exemple.com"
                      className="field__input"
                      type="text"
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </label>
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
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
                    </label>
                    {formik.touched.zipCode && formik.errors.zipCode ? (
                      <div className="error">{formik.errors.zipCode}</div>
                    ) : null}
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
                    </label>
                    {formik.touched.city && formik.errors.city ? (
                      <div className="error">{formik.errors.city}</div>
                    ) : null}
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
                    </label>
                    {formik.touched.state && formik.errors.state ? (
                      <div className="error">{formik.errors.state}</div>
                    ) : null}
                  </div>
                  <label
                    className="field"
                    style={{ width: "100%", paddingBottom: "150px" }}>
                    <span className="field__label" for="message">
                      Your message
                    </span>
                    <input
                      placeholder="why you want contact us"
                      className="field__input"
                      type="text"
                      id="message"
                      name="message"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    />
                  </label>
                  {formik.touched.message && formik.errors.message ? (
                    <div className="error">{formik.errors.message}</div>
                  ) : null}
                </div>
                <input
                  type="submit"
                  className="shipping-button"
                  onClick={() => {
                    setClicked(true);
                  }}
                />
              </div>
            </form>
          </section>
        </div>
      )}
      <Footer />
    </>
  );
}
