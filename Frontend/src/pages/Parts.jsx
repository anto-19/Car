import React from "react";
import Hero from "../components/Hero";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../css/index.css";
import "../css/cars.css";
import "../css/parts.css";
const Parts = () => {
   const [data, setData] = useState([]);
   const [items, setItems] = useState([]);
   const [visible, setVisible] = useState(8);
   const showMoreItems = () => {
      setVisible(prevValue => prevValue + 4);
   };

   useEffect(() => {
      fetch("http://localhost:5000/api/getparts/")
         .then(response => response.json())
         .then(json => setData(json))
         .catch(() => {})
         .finally(() => {});
      console.log("firstcars");
   }, []);

   return (
      <>
         <div>
            <Hero
               heading="EXPLORE"
               subheading="OUR SALVAGE VEHICLES"
               smalltext="your gateway to premium car parts, performance 
          upgrades, and unparalleled driving experiences"
               class="parts"
               show="false"
            />
         </div>
         <div className="partser" style={{ marginTop: "30px" }}>
            <p>Parts</p>
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
                              to={`/parts/${datas._id}`}
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

export default Parts;
