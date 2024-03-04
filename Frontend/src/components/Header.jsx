import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import Home from "../pages/Home";
import Parts from "../pages/Parts";
import Cars from "../pages/Cars";
import About from "../pages/About";
import Error from "../pages/Error404.jsx";
import Sellyourcar from "../pages/Sellyourcar";
import image from "../image/Logo.png";
import { Route, Link, Routes } from "react-router-dom";
import "../css/header.css";
import SingleProduct from "../pages/SingleProduct";
import SingleParts from "../pages/SingleParts";
import Login from "./Login";
import Signup from "./Signup";
import AddCar from "./AddCar";
import Termsconditions from "../pages/Termsconditions";
import Admin from "../pages/Admin";
import { useEffect } from "react";

const Header = () => {
   const [expanded, setExpanded] = useState(false);
   const [scroll, srtScroll] = useState(0);

   return (
      <div>
         <section className="scroll-section">
            <div className="scroll text1">
               <div>
                  <span> Elevate Your Drive with Premium Auto Components</span>
                  <span>Reliable Parts, Speedy Delivery—Every Time</span>
                  <span>
                     Unleash Your Ride's Potential with Our Quality Part
                  </span>
                  <span>Drive with Confidence, Thanks to Our Parts</span>
                  <span>Precision Performance, Delivered Swiftly</span>
               </div>
               <div>
                  <span> Elevate Your Drive with Premium Auto Components</span>
                  <span>Reliable Parts, Speedy Delivery—Every Time</span>
                  <span>
                     Unleash Your Ride's Potential with Our Quality Part
                  </span>
                  <span>Drive with Confidence, Thanks to Our Parts</span>
                  <span>Precision Performance, Delivered Swiftly</span>
               </div>
            </div>
         </section>

         <Navbar
            collapseOnSelect
            expand="xl"
            className="header"
            style={{ padding: "0 0px" }}>
            <Container>
               <Navbar.Brand href="/">
                  <img className="logo" src={image} alt="" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto a-tags">
                     <Nav.Item>
                        <Nav.Link eventKey="1" as={Link} to="/" className="a">
                           HOME
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link
                           eventKey="1"
                           as={Link}
                           to="/parts"
                           className="a">
                           PARTS
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link
                           eventKey="1"
                           as={Link}
                           to="/cars"
                           className="a">
                           CARS
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link
                           eventKey="1"
                           as={Link}
                           to="/sellyourcar"
                           className="a">
                           SELL YOUR CAR
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item>
                        <Nav.Link
                           eventKey="1"
                           as={Link}
                           to="/about"
                           className="a">
                           ABOUT
                        </Nav.Link>
                     </Nav.Item>
                     {/* <Link to="/">HOME</Link>
                     <Link to="/parts">PARTS</Link>
                     <Link to="/cars">CARS</Link>
                     <Link to="/sellyourcar">SELL YOUR CAR</Link>
                     <Link to="/about">ABOUT</Link> */}
                  </Nav>
                  <Nav>
                     <div className="header-rightcontent">
                        <span>
                           <a href="tel:02 4388 1818" className="phone">
                              02 4388 1818
                           </a>
                        </span>

                        <button className="red-btn huhu">
                           <a className="bubul" href="#contact">
                              CONTACT US
                           </a>
                        </button>
                     </div>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Routes>
            {/* <Route path="/AddCar" element={<AddCar />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/sellyourcar" element={<Sellyourcar />} />

            <Route path="/cars/:partsId" element={<SingleProduct />} />
            <Route path="/parts/:partsId" element={<SingleParts />} />
            <Route path="/Terms-conditions" element={<Termsconditions />} />
            <Route path="/admin" element={<Admin />} />
         </Routes>
      </div>
   );
};

export default Header;
