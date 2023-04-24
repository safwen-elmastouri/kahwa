import React, { useState, memo, useMemo } from "react";
import NavBar from "../component/NavBar";
import { food, drink } from "../data/data";
import ProuctCard from "../component/ProuctCard";
import Footer from "../component/Footer";
import { useLocation } from "react-router-dom";
import "../style/productPage.css";

function ProductPage() {
  window.scroll(0,0)
  const [empty, setEmpty] = useState(false);
  const location = useLocation();
  const state = location.state;
  const condition = state === "food";
  const [searchTerm, setSearchTerm] = useState("");
  let data = {};
  if (state === "food") {
    data = food;
  } else {
    data = drink;
  }

  return (
    <>
      <NavBar />
      <main>
        {condition ? (
          <h3 className="menu-titile">Food menu</h3>
        ) : (
          <h3 className="menu-titile">Drinks Menu</h3>
        )}
        <div className="box">
          <input
            type="text"
            className="input"
            name="txt"
            value={searchTerm}
            placeholder="Search ..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="product-container">
          {data
            .filter((item) => {
              if (searchTerm == "") {
                return item;
              } else if (
                item.title
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return item;
              } else if (
                item.title
                  .toLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                console.log(item);
              }
            })
            .map((item, key) => {

                return ( 
                  <ProuctCard
                    id={key}
                    key={key}
                    source={item.source}
                    title={item.title}
                    description={item.description}
                    val={item.val}
                    price={item.price}
                  />
              );
            })}
        </div>
        <p></p>
      </main>
      <Footer />
    </>
  );
}

export default memo(ProductPage);
