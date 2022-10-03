import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Lap() {
  const [Count, setCount] = useState(0);
  const [Toggle, setToggle] = useState(true);
  const toggler = () => {
    Toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="counter m-20">
      <div className="content">
        <h2
          className="d-flex justify-content-center "
          style={{ color: Toggle ? "black" : "blue" }}
        >
          {Count}
        </h2>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-outline-success"
            onClick={() => {
              setCount(Count + 1);
            }}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={() => {
              setCount(Count - 1);
            }}
            disabled={Count === 0}
          >
            Decrement
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              setCount(0);
            }}
            disabled={Count === 0}
          >
            Reset
          </button>
          <button
            className="btn btn-outline-secondary "
            onClick={() => {
              toggler();
            }}
          >
            change color to blue
          </button>
        </div>
      </div>
    </div>
  );
}
export default Lap;
