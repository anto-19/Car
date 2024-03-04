import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect, useState } from "react";
import group from "../image/group.png";
import smallgroup from "../image/smallgroup.png";
import Hero from "../components/Hero.jsx";
import "../css/card.css";
import "../css/home.css";
import "../css/hero.css";
import Services from "../components/Services.jsx";
import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import Footer from "../components/Footer.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
   const [DATA, setDATA] = useState([]);
   useEffect(() => {
      fetch("http://localhost:5000/api/get/")
         .then(response => response.json())
         .then(json => setDATA(json));
   }, []);

   var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true,
               dots: false,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
               infinite: true,
               dots: false,
            },
         },
         {
            breakpoint: 450,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false,
            },
         },
      ],
   };
   const [backTop, setBackTop] = useState(false);

   useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 100) {
            setBackTop(true);
         } else {
            setBackTop(false);
         }
      });
   }, []);
   const scroltop = () => {
      window.scrollTo({
         top: 0,
         behavior: "instant",
      });
   };
   return (
      <div className="container">
         <Hero
            topsubheading="WELCOME TO"
            heading="CENTRAL COAST"
            subheading="AUTO PARTS"
            smalltext="We specialize in 4WD’s, Van’s diesel and petrol as well as hybrid cars"
            class="hero"
            show=""
         />
         {/* <div className="tabs">
            <Tabs
               defaultActiveKey="DIESEL"
               transition={false}
               id="noanim-tab-example"
               className="mb-3">
               <Tab
                  style={{ font: "geom !important" }}
                  eventKey="contact"
                  title="POPULAR ITEMS"
                  className="firsttab  poll"
                  disabled></Tab>

               <Tab eventKey="DIESEL" title="DIESEL">
                  <hr className="home-tabs-hr" />
                  <Slider
                     style={{
                        width: "80%",
                        margin: "0 auto",
                        textAlign: "center",
                        padding: "100px 0px",
                     }}
                     {...settings}>
                     {DATA.map(res => {
                        if (res.category != "diesel") {
                           return;
                        }
                        return (
                           <>
                              <div
                                 className="single-card"
                                 style={{ margin: "0 10px" }}>
                                 <div className="box" id="show">
                                    SALE
                                 </div>
                                 <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_sPaJehnl0Py5q4htOSou2uIsIrfZdAskCXY2zb1OFP8g0A7wridKKNyVkYOaUbeKAA&usqp=CAU"
                                    alt=""
                                    className="card-img"
                                 />
                                 <h3>{res.model}</h3>
                                 <p>{res.model}</p>

                                 <Link
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
                  </Slider>
               </Tab>
               <Tab eventKey="PETROL " title="PETROL">
                  <hr className="home-tabs-hr" />
                  <Slider
                     style={{
                        width: "80%",
                        margin: "0 auto",
                        textAlign: "center",
                        padding: "100px 0px",
                     }}
                     {...settings}>
                     {DATA.map(res => {
                        if (res.category != "petrol") {
                           return;
                        }
                        return (
                           <>
                              <div
                                 className="single-card"
                                 style={{ margin: "0 10px" }}>
                                 <div className="box" id="show">
                                    SALE
                                 </div>
                                 <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_sPaJehnl0Py5q4htOSou2uIsIrfZdAskCXY2zb1OFP8g0A7wridKKNyVkYOaUbeKAA&usqp=CAU"
                                    alt=""
                                    className="card-img"
                                 />
                                 <h3>{res.model}</h3>
                                 <p>{res.model}</p>
                                 <Link
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
                  </Slider>
               </Tab>
               <Tab eventKey="Hybird" title="HYBRID">
                  <hr className="home-tabs-hr" />
                  <Slider
                     style={{
                        width: "80%",
                        margin: "0 auto",
                        textAlign: "hybrid",
                        padding: "100px 0px",
                     }}
                     {...settings}>
                     {DATA.map(res => {
                        if (res.category != "hybrid") {
                           return;
                        }
                        return (
                           <>
                              <div
                                 className="single-card"
                                 style={{ margin: "0 10px" }}>
                                 <div className="box" id="show">
                                    SALE
                                 </div>
                                 <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_sPaJehnl0Py5q4htOSou2uIsIrfZdAskCXY2zb1OFP8g0A7wridKKNyVkYOaUbeKAA&usqp=CAU"
                                    alt=""
                                    className="card-img"
                                 />
                                 <h3>{res.model}</h3>
                                 <p>{res.model}</p>
                                 <Link
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
                  </Slider>
               </Tab>
            </Tabs>
         </div> */}
         <Services />

         <div className="contact-p">
            <h2 className="contact-h2-header fadeup1">SELL YOUR CAR</h2>
            <hr />
            <p className=" contact-p-header">
               Looking to sell your car? Complete our selling form, and we'll
               respond with an offer
            </p>
            <br />
            <Link to="sellyourcar" onClick={scroltop}>
               <button
                  className="white-btn contact-button-header"
                  style={{ margin: 0 }}>
                  SELL YOUR CAR
               </button>
            </Link>
         </div>
         <br />
         <br />

         <div className="callusnow">
            <div className="contact-header">
               <div className="contacttext">
                  <p style={{ textTransform: "uppercase" }} className="about-p">
                     Discover a wide range of top-notch auto parts compatible
                     with popular brands
                  </p>
               </div>
               <div>
                  <img src={group} alt="" className="imag-logos" />
                  <img src={smallgroup} alt="" className="imag-logos-small" />
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
};

export default Home;
