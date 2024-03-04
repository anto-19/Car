import React, { useEffect, useState } from "react";
import lexus from "../image/lexus.png";
import "../css/footer.css";
import Form from "react-bootstrap/Form";
import Forms from "./Forms";
import image from "../image/logo.png";
import svg from "../icons/map.svg";
import as from "../icons/clock.svg";
import tv from "../icons/call.svg";
import nn from "../icons/email.svg";
import arrow from "../icons/arrow-top.svg";
import { Link } from "react-router-dom";
import american from "../image/express.png";
import maestro from "../image/maestro.png";
import master from "../image/mastercard.png";
import pay from "../image/paypal.png";
import visa from "../image/visa.png";
import face from "../image/facebook.png";
import insta from "../image/insta.png";
import ebay from "../image/ebay.png";
import kiss from "../image/kiss.png";

const Footer = props => {
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

   const scroltopsmooth = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   const scroltopinstant = () => {
      window.scrollTo({
         top: 0,
         behavior: "instant",
      });
   };
   return (
      <div className="container">
         <div className="footer">
            <div className="contact-header">
               <p className="contact-p">
                  Alternatively, complete our Free Quote Request form, and we'll
                  respond to you within 24 hours
                  <hr />
               </p>
            </div>
            <div className="contact">
               <div className="formmm">
                  <Forms />
               </div>
            </div>
         </div>
         <div className="callusnow" id={props.hide}>
            <div className="callusnowtext">
               <p>UNABLE TO LOCATE WHAT YOU NEED?</p>
               <hr />
               <p>REACH OUT TO OUR KNOWLEDGEABLE TEAM </p>
               <br />
               <button className="white-btn">
                  <a href="tel:02 4388 1818">CALL US NOW</a>
               </button>
            </div>
         </div>
         <div className="verch">
            <img className="logo" src={image} alt="" />
            <div className="verch-text">
               <div className="icons">
                  <div className="icon">
                     <img src={svg} alt="" />
                     <a
                        className="bubuligg"
                        href="https://www.google.com/maps/dir/40.179919,44.514887/google+maps+central+coast+auto+parts+australia/@-33.323399,151.4230491,16.18z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x6b72cfd59c2ce471:0x34f2afbeece9407f!2m2!1d151.4242598!2d-33.3238671?entry=ttu"
                        target="blank">
                        23 Hereford ST, Berkeley Vale NSW 2261
                     </a>
                  </div>
                  <div className="icon">
                     <img src={as} alt="" />
                     <p>MON-FRI 8:00 AM - 5:00 PM AND SAT 9:00 AM TO 2:00 PM</p>
                  </div>
                  <div className="icon">
                     <img src={tv} alt="" />

                     <a
                        href="tel:02 4388 1818"
                        className="phone hehe "
                        style={{ textDecoration: "none" }}>
                        02 4388 1818
                     </a>
                  </div>
                  <div className="icon">
                     <img src={nn} alt="" />
                     <p>
                        <a
                           href="mailto:sales@centralcoastautoparts.com.au "
                           style={{ textDecoration: "none", color: "white" }}>
                           sales@centralcoastautoparts.com.au
                        </a>
                     </p>
                  </div>
               </div>
               <div className="lin">
                  <p>NAVIGATION</p>
                  <div className="links">
                     <Link to="/" onClick={scroltopinstant}>
                        HOME
                     </Link>
                     <Link to="/parts" onClick={scroltopinstant}>
                        PARTS
                     </Link>
                     <Link to="/cars" onClick={scroltopinstant}>
                        CARS
                     </Link>
                     <Link to="/about" onClick={scroltopinstant}>
                        ABOUT
                     </Link>
                     <Link to="/sellyourcar" onClick={scroltopinstant}>
                        SELL YOUR CAR
                     </Link>
                     <Link to="/Terms-conditions" onClick={scroltopinstant}>
                        TERMS & CONDITIONS
                     </Link>
                  </div>
               </div>
               <div className="social">
                  <p className="ACCEPT">WE ACCEPT</p>

                  <img src={maestro} alt="" />
                  <img src={master} alt="" />
                  <img src={pay} alt="" />
                  <img src={visa} alt="" />
                  <br />
                  <br />
                  <div className="zad">
                     <p className="ACCEPT">JOIN US</p>
                     <img src={face} alt="" />
                     <img src={insta} alt="" />
                     <img src={kiss} alt="" />
                     <img src={ebay} alt="" />
                  </div>
               </div>
            </div>
         </div>

         {backTop && (
            <a onClick={scroltopsmooth} style={{ cursor: "pointer" }}>
               <div className="scroll-top">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="800px"
                     height="800px"
                     viewBox="0 0 512 512">
                     <polygon
                        fill="var(--ci-primary-color, #000)"
                        points="390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625"
                        className="ci-primary"
                     />
                  </svg>
               </div>
            </a>
         )}
      </div>
   );
};

export default Footer;
