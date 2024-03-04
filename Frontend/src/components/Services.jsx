import React from "react";
import icon from "../icons/iconserv.svg";
import "../css/services.css";
import "../css/index.css";
import arach from "../icons/arachin.svg";
import yeg from "../icons/2.svg";
import yerek from "../icons/3.svg";
import chors from "../icons/4.svg";
import hing from "../icons/5.svg";
import vets from "../icons/6.svg";
import yot from "../icons/7.svg";
import ute from "../icons/8.svg";
import { Link } from "react-router-dom";

const Services = props => {
   return (
      <>
         <div>
            <br />
            <br />
            <div className=" contact-p">
               <p className="contacttext fadeup1">OUR SERVICES</p>
               <hr />
            </div>
            <br />
            <br />
            <div className="topcard ">
               <div className="services fadeup1">
                  <div className="card-left">
                     <img src={arach} style={{ width: "60px" }} alt="" />
                  </div>
                  <div className="card-right">
                     <h3>Clutch</h3>
                     <p style={{ color: "black", fontFamily: "sans-serif" }}>
                        Drive smoothly with our reliable clutch systems for peak
                        performance
                     </p>
                  </div>
               </div>

               <div className="services fadeup1">
                  <div className="card-left">
                     <img src={yeg} style={{ width: "60px" }} alt="" />
                  </div>
                  <div className="card-right">
                     <h3>Brake Systems</h3>
                     <p style={{ color: "black", fontFamily: "sans-serif" }}>
                        Ensure safety with our precision brake systems for
                        confident driving.
                     </p>
                  </div>
               </div>

               <div className="services fadeup1" id={props.hide}>
                  <div className="card-left">
                     <img src={yerek} style={{ width: "60px" }} alt="" />
                  </div>
                  <div className="card-right">
                     <h3>Transmission Syetsms</h3>
                     <p style={{ color: "black", fontFamily: "sans-serif" }}>
                        Efficient and reliable transmission systems for optimal
                        driving performance.
                     </p>
                  </div>
               </div>
               <div className="services fadeup1">
                  <div className="card-left">
                     <img src={chors} style={{ width: "60px" }} alt="" />
                  </div>
                  <div className="card-right">
                     <h3>Suspension and Shock Absorbers</h3>
                     <p style={{ color: "black", fontFamily: "sans-serif" }}>
                        Experience a smooth ride with our quality suspension and
                        shock absorbers.
                     </p>
                  </div>
               </div>
            </div>
            <div className="bottomcard">
               <div className="services fadeup1">
                  <div className="card-left">
                     <img src={hing} style={{ width: "60px" }} alt="" />
                  </div>
                  <div className="card-right">
                     <h3>Auto Electrical Systems</h3>
                     <p style={{ color: "black", fontFamily: "sans-serif" }}>
                        Power up your vehicle with our cutting-edge auto
                        electrical systems for a seamless driving experience
                     </p>
                  </div>
               </div>
               <div className="services fadeup1">
                  <div className="card-left">
                     <img src={vets} style={{ width: "60px" }} alt="" />
                  </div>
                  <div className="card-right">
                     <h3>Exhaust Systems </h3>
                     <p style={{ color: "black", fontFamily: "sans-serif" }}>
                        Optimize performance and efficiency with our advanced
                        exhaust systems for your vehicle
                     </p>
                  </div>
               </div>
               <div className="services fadeup1">
                  <div className="card-left">
                     <img src={yot} style={{ width: "60px" }} alt="" />
                  </div>
                  <div className="card-right">
                     <h3>Cooling Systems </h3>
                     <p style={{ color: "black", fontFamily: "sans-serif" }}>
                        Keep your engine cool and running smoothly with our
                        high-performance cooling systems
                     </p>
                  </div>
               </div>
               <div className="services fadeup1" id={props.hide}>
                  <div className="card-left">
                     <img src={ute} style={{ width: "60px" }} alt="" />
                  </div>
                  <div className="card-right">
                     <h3>Ignition Systems</h3>
                     <p style={{ color: "black", fontFamily: "sans-serif" }}>
                        Ignite performance with our superior ignition systems
                        for a reliable and efficient driving experience
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <br />
         <br />
      </>
   );
};

export default Services;
