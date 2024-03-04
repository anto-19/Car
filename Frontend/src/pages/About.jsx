import React from "react";
import Hero from "../components/Hero.jsx";
import "../css/about.css";
import about from "../image/hagopigg.png";
import { Link } from "react-router-dom";
import Services from "../components/Services.jsx";
import Footer from "../components/Footer.jsx";
import verchinee from "../image/group.png";
import group from "../image/group.png";
import smallgroup from "../image/smallgroup.png";

const About = () => {
   return (
      <>
         <div>
            <Hero heading="ABOUT US" class="about" show="false" />
         </div>
         <div className="about-us">
            <div className="about-usleft">
               <img src={about} alt="" />
            </div>
            <div className="about-usright">
               <h3>Central Coast’s leading used Auto Parts Specialist </h3>
               <p style={{ marginTop: "30px" }}>
                  We have large inventory of quality used car parts, all Our
                  used parts comes with{" "}
                  <span style={{ color: "white" }}>warranty</span>
               </p>
               <br />
               <div className="entanur-ul">
                  <div>
                     <p>
                        Our experienced team is ready to assist if You can’t
                        find what You’re looking for,{" "}
                        <span style={{ color: "white" }}>
                           please call Our helpful Team ot Submit an enquiry,
                        </span>{" "}
                        and We’ll do Our best to fulfill Your request.
                     </p>
                     <br />
                     <p>
                        We offer{" "}
                        <span style={{ color: "white" }}>
                           nationwide delivery!
                        </span>{" "}
                        Additionally, for local Customers We can provide engine
                        and gearbox fitting
                     </p>
                     <br />
                     <br />
                  </div>
                  <div></div>
               </div>
               <button className="red-btn">
                  <a href="#contact">CONTACT US</a>
               </button>
            </div>
         </div>
         <br />
         <br />

         <>
            <div className="callusnow">
               <div className="contact-header">
                  <div className="contacttext">
                     <p
                        style={{ textTransform: "uppercase" }}
                        className="about-p">
                        Discover a wide range of top-notch auto parts compatible
                        with popular brands
                     </p>
                  </div>
                  <div>
                     <img src={group} alt="" className="imag-logos" />
                     <img
                        src={smallgroup}
                        alt=""
                        className="imag-logos-small"
                     />
                  </div>
               </div>
            </div>
         </>

         <Footer hide="hide" />
      </>
   );
};

export default About;
