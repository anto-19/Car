import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../css/index.css";
import { motion } from "framer-motion";
const Hero = props => {
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
      <div>
         <div className={props.class}>
            <div className="hero-col1">
               <div className="hero-content ">
                  <motion.div
                     className="box"
                     initial={{ x: -300 }} // Initial animation state
                     animate={{ x: 0 }} // Target animation state
                     transition={{ duration: 0.4 }} // Animation duration
                  >
                     <h3>{props.topsubheading}</h3>
                  </motion.div>
                  <motion.div
                     className="box"
                     initial={{ x: -300 }} // Initial animation state
                     animate={{ x: 0 }} // Target animation state
                     transition={{ duration: 0.6 }} // Animation duration
                  >
                     <h2>{props.heading}</h2>
                  </motion.div>
                  <motion.div
                     className="box"
                     initial={{ x: -300 }} // Initial animation state
                     animate={{ x: 0 }} // Target animation state
                     transition={{ duration: 0.8 }} // Animation duration
                  >
                     <h3>{props.subheading}</h3>
                  </motion.div>
                  <motion.div
                     className="box"
                     initial={{ x: -300 }} // Initial animation state
                     animate={{ x: 0 }} // Target animation state
                     transition={{ duration: 1 }} // Animation duration
                  >
                     <p> {props.smalltext}</p>
                  </motion.div>

                  <motion.div
                     className="box"
                     initial={{ y: 100 }} // Initial animation state
                     animate={{ y: 0 }} // Target animation state
                     transition={{ duration: 0.6 }} // Animation duration
                  >
                     <div className="hero-button" id={props.show}>
                        <Link to="/cars" onClick={scroltop}>
                           <button className="red-btn">VIEW CARS</button>
                        </Link>
                        <Link to="sellyourcar" onClick={scroltop}>
                           <button className="red-btn">SELL YOUR CAR</button>
                        </Link>
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
