import React, { useState } from "react";
import "../css/login.css";
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    const email = e.target.name;
    const password = e.target.value;
    setInput((prev) => {
      return { ...prev, [email]: password };
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");

        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./addcar";
        }
      });
  };
  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <h3>Sign In</h3>

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
          placeholder="Enter password"
          name="password"
          onChange={handleSubmit}
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
