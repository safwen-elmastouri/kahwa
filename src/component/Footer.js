import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../style/footerStyle.css";

import fb from "../images/social-media/fb.png";
import yt from "../images/social-media/yt.png";
import tw from "../images/social-media/tw.png";

function Footer() {
  return (
    <div className="container">
      <div className="service">
        <a>
          <h4>About us</h4>{" "}
        </a>
        <a>
          <h4>Contact</h4>
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
