import React, { useState, useRef } from "react";
import Hero from "../components/Hero.jsx";
import "../css/sellyourcar.css";
import Footer from "../components/Footer.jsx";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Compressor from "compressorjs";
const Sellyourcar = () => {
   const form = useRef();

   const [compressedFile, setCompressedFile] = useState(null);

   const handleCompressedUpload = e => {
      const image = e.target.files[0];
      new Compressor(image, {
         quality: 0.2,
         success: compressedResult => {
            console.log(compressedResult.size);
            setCompressedFile(compressedResult);
         },
      });
   };
   const initialInputState = {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      input8: "",
      input9: "",
      input10: "",
      image: "",
      // Add more inputs if needed
   };

   const [inputValues, setInputValues] = useState(initialInputState);

   const handleChange = e => {
      const { name, value } = e.target;
      setInputValues({
         ...inputValues,
         [name]: value,
      });
      console.log(value);
   };

   const handleReset = () => {
      setInputValues(initialInputState);
   };

   const notify = () => {
      toast.success("sent successfully", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
   };
   const notifyError = () => {
      toast.error("Error", {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "light",
      });
   };
   const sendEmail = e => {
      e.preventDefault();

      emailjs
         .sendForm("service_5nd6hnl", "template_7t73gag", form.current, {
            publicKey: "_BYXJis6Yy2J2kw-V",
         })
         .then(
            () => {
               console.log("SUCCESS!");
               notify();
            },
            error => {
               console.log("FAILED...", error.text);
               notifyError();
            }
         );
      handleReset();
   };
   return (
      <>
         <Hero heading="SELL A CAR" class="sellyourcar" show="false" />

         <div className="last-one">
            <form ref={form} onSubmit={sendEmail}>
               <div className="partser" style={{ marginTop: "30px" }}>
                  <p>SELL YOUR CAR</p>
               </div>
               <hr className="hr" />
               <div className="entanur-input">
                  <div className="formmm">
                     <div>
                        <p>FULL NAME</p>
                        <input
                           required
                           type="text"
                           name="input1"
                           value={inputValues.input1}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                     <div>
                        <p>LOCATION</p>
                        <input
                           required
                           type="text"
                           name="input9"
                           value={inputValues.input9}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                  </div>
                  <div className="formmm">
                     <div>
                        <p>PHONE </p>
                        <input
                           required
                           type="text"
                           name="input3"
                           value={inputValues.input3}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                     <div>
                        <p>VEHICLE MODEL</p>
                        <input
                           required
                           type="text"
                           name="input4"
                           value={inputValues.input4}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                  </div>
                  <div className="formmm">
                     <div>
                        <p>EMAIL</p>
                        <input
                           required
                           type="text"
                           name="input2"
                           value={inputValues.input2}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                     <div>
                        <p>VEHICLE YEAR</p>
                        <input
                           required
                           type="text"
                           name="input5"
                           value={inputValues.input5}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                  </div>
                  <div className="formmm">
                     <div>
                        <p>CONDITION OF VEHICLE BODY</p>
                        <input
                           required
                           type="text"
                           name="input7"
                           value={inputValues.input7}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                     {/* <p >DRIVABLE</p> */}
                     {/* <p>DRIVABLE</p> */}
                     <div className="radio-body">
                        <div
                           className="donate-now"
                           style={{ display: "flex", flexDirection: "column" }}>
                           <ul className="donate-now">
                              <p>DRIVABLE</p>
                              <li>
                                 <input type="radio" id="a25" name="no" />
                                 <label for="a25">Yes</label>
                              </li>
                              <li>
                                 <img src="" alt="" />
                                 <input type="radio" id="a50" name="no" />
                                 <label for="a50">No</label>
                              </li>
                           </ul>
                        </div>

                        <div>
                           <label>
                              ODOMETER
                              <input
                                 required
                                 name="input8"
                                 value={inputValues.input8}
                                 onChange={handleChange}
                                 type="number"
                                 id="number"
                              />
                           </label>
                        </div>
                     </div>
                  </div>
                  <div className="formmm">
                     <div>
                        <p className="juju">
                           CONDITION OF VEHICLE MECHANICALLY
                        </p>
                        <input
                           required
                           type="text"
                           name="input6"
                           value={inputValues.input6}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                     <div>
                        <p>ASKING PRICE</p>
                        <input
                           required
                           type="text"
                           name="input10"
                           value={inputValues.input10}
                           onChange={handleChange}
                           className="esh-koko"
                        />
                     </div>
                  </div>

                  <div className="formmm">
                     <div>
                        <p style={{ opacity: "0" }}> .</p>

                        <button
                           className="red-btn sellyourcar-btn"
                           style={{ width: "350px" }}>
                           SUBMIT SALE OFFER
                        </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
         <Footer />
      </>
   );
};

export default Sellyourcar;
