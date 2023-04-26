import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import "../style/about.css";

export default function AboutUs() {
 

  return (
    <>
      <NavBar />
      <div className="contact-page">
        <div>
          <img src={require("../images/logo.png")} />
        </div>
        <div className="content">
          <h1>About US</h1>
          Welcome to KAHWA our food and coffee delivery website! We are a team of
          passionate individuals who believe in the power of delicious food and
          quality coffee to make people's day better.<br/> Our mission is to bring
          convenience and satisfaction to your doorstep with our easy-to-use
          platform and extensive menu options.<br/>  Whether you're in the mood for a
          hearty breakfast, a light lunch, or a decadent dessert,<br/><br/> we've got you
          covered.<br/>  Our team of talented chefs and bakers uses only the freshest
          ingredients to prepare each and every dish to perfection. From classic
          favorites to trendy new options, our menu has something for everyone.
          And of course, no meal is complete without a good cup of coffee.
          That's why we partner with some of the best coffee roasters in the
          business to provide you with a premium coffee experience. <br/><br/>From bold
          and robust to smooth and mellow, our coffee selection is sure to
          satisfy even the most discerning coffee lover. We understand that your
          time is valuable, which is why we offer fast and reliable delivery
          services. Whether you're ordering for yourself or a group, our team
          works hard to ensure that your food and coffee arrive at your doorstep
          hot and fresh.<br/><br/> At our food and coffee delivery website, we pride
          ourselves on delivering more than just a meal or a cup of coffee - we
          deliver an experience. So why wait? Order now and let us bring a
          little joy and convenience to your day.
        </div>
      </div>
      <Footer />
    </>
  );
}
