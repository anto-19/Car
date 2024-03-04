import React from "react";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../css/index.css";

import "../css/cars.css";
import "../css/parts.css";
const Cars = () => {
   const [data, setData] = useState([]);
   const [items, setItems] = useState([]);
   const [visible, setVisible] = useState(8);
   const showMoreItems = () => {
      setVisible(prevValue => prevValue + 4);
   };

   useEffect(() => {
      fetch("http://localhost:5000/api/get/")
         .then(response => response.json())
         .then(json => setData(json));
      console.log("firstcars");
   }, []);
   console.log("secondcars");

   console.log(data);
   return (
      <>
         <div>
            <Hero
               heading="EXPLORE"
               subheading="OUR SALVAGE VEHICLES"
               smalltext="Explore treasures in our wrecked vehicle collection"
               class="cars"
               show="false"
            />
         </div>
         <div className="partser" style={{ marginTop: "30px" }}>
            <p>Cars</p>
            <hr className="hr" />

            <div className="cards">
               {data.slice(0, visible).map(datas => {
                  return (
                     <>
                        <div className="single-card">
                           <div className="box">SALE</div>
                           <img
                              src={datas.image_url}
                              alt=""
                              className="card-img"
                           />
                           <h3>{datas.title}</h3>
                           <p>{datas.body}</p>
                           <Link
                              to={`/cars/${datas._id}`}
                              style={{
                                 textDecoration: "none",
                                 width: "90%",
                                 lineHeight: "45px",
                              }}
                              className="white-btn">
                              MORE DETAILS
                           </Link>

                           <a
                              href="#contact"
                              className="red-btn"
                              style={{
                                 textDecoration: "none",
                                 width: "90%",
                                 lineHeight: "45px",
                              }}>
                              Submit Inquiry
                           </a>
                        </div>
                     </>
                  );
               })}
            </div>
            <div
               style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "50px",
               }}>
               {/* <button className="red-btn" onClick={showMoreItems}>
            LOAD MORE
          </button> */}
            </div>
         </div>
         <Footer hide="hide" />
      </>
   );
};

export default Cars;
