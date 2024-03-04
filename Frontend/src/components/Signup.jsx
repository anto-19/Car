import React, { useState } from "react";
import "../css/login.css";

const Signup = () => {
   const [input, setInput] = useState({
      fname: "",
      lname: "",
      email: "",
      password: "",
   });

   const handleSubmit = e => {
      const name = e.target.name;
      const value = e.target.value;
      setInput(prev => {
         return { ...prev, [name]: value };
      });
   };
   const handleFormSubmit = e => {
      const { fname, lname, email, password } = input;
      e.preventDefault();
      fetch("http://localhost:5000/register", {
         method: "POST",
         crossDomain: true,
         headers: {
            "Content-type": "application/json",
            userDataAccept: "application/json",
            "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
            fname,
            email,
            lname,
            password,
         }),
      })
         .then(res => res.json())
         .then(data => {
            console.log(data, "userRegister");
         });
   };
   return (
      <form onSubmit={handleFormSubmit}>
         <h3>Sign Up</h3>

         <div className="mb-3">
            <label>First name</label>
            <input
               type="text"
               className="form-control"
               placeholder="First name"
               name="fname"
               onChange={handleSubmit}
            />
         </div>

         <div className="mb-3">
            <label>Last name</label>
            <input
               type="text"
               className="form-control"
               placeholder="Last name"
               name="lname"
               onChange={handleSubmit}
            />
         </div>

         <div className="mb-3">
            <label>Email address</label>
            <input
               type="email"
               className="form-control"
               placeholder="Enter email"
               name="email"
               onChange={handleSubmit}
            />
         </div>

         <div className="mb-3">
            <label>Password</label>
            <input
               type="password"
               className="form-control"
               name="password"
               placeholder="Enter password"
               onChange={handleSubmit}
            />
         </div>

         <div className="d-grid">
            <button type="submit" className="btn btn-primary">
               Sign Up
            </button>
         </div>
         <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
         </p>
      </form>
   );
};

export default Signup;
