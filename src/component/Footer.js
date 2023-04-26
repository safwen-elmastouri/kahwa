import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../style/footerStyle.css";

function Footer() {
  return (
    <div className="container">
      <div className="service">
        <Link
          to="/about-us"
          style={{ color: "inherit", textDecoration: "inherit" }}>
          <a>
            <h4>About us</h4>{" "}
          </a>
        </Link>
        <a>
            <Link to="/contact"style={{ color: "inherit", textDecoration: "inherit" }} >
            <h4>Contact</h4>
          </Link>
        </a>
      </div>
      <p id="para">All Right Reserved ®</p>
      <a target="_blank" href="https://github.com/safwendev">
        <img src={require("../images/github.png")} />
      </a>
    </div>
  );
}

export default memo(Footer);
