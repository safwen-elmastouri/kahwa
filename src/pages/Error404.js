import React from "react";
import "../style/error.css";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

export default function Error404() {
    window.scroll(0,0)
  return (
    <>
      <NavBar />
      <div className="error-container">
        <h1
          id="error-title"
          style={{
            fontSize: "7rem",
            marginBottom: "-1rem",
            color: "#343a40",
            textShadow: "2px 4px #000",
          }}>
          404
        </h1>
        <h1 id="error-title">Page Not Found</h1>
        <p id="error-subtitle">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <button id="btn">Home</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
