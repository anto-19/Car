import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Card = (props) => {
  return (
    <>
      <div className="single-card">
        <div className="box" id={props.issale}>
          SALE
        </div>
        <img src={props.img} alt="" className="card-img" />
        <h3>{props.title}</h3>
        <p>{props.body}</p>

        <button className="white-btn">MORE DETAILS</button>

        <button className="red-btn">
          <a href="#contact">Submit Inquiry</a>
        </button>
      </div>
    </>
  );
};

export default Card;
