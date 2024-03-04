import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import "../css/Error404.css";
const Error404 = () => {
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
   const scroltopinstant = () => {
      window.scrollTo({
         top: 0,
         behavior: "instant",
      });
   };
   return (
      <>
         <div className="error404">
            <h1>404</h1>
            <p>Page not Found...</p>
            <Link to="/" onClick={scroltopinstant}>
               <button className="red-btn">Back Home</button>
            </Link>
         </div>
         <Footer />
      </>
   );
};

export default Error404;
