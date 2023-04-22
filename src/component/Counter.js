import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../style/counter.css";


function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <button className="btn" onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div className="count">{count}</div>
      <button className="btn" onClick={handleDecrement}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}

export default Counter;
