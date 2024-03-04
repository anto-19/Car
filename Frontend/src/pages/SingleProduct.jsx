import React, { useState, useEffect, useLayoutEffect } from "react";
import { Link, useFetcher, useParams } from "react-router-dom";
import "../css/single.css";
import "../css/index.css";
import Carousel from "react-bootstrap/Carousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import Footer from "../components/Footer";

const SingleProduct = () => {
  const { partsId } = useParams();
  const [data, setData] = useState([]);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  // const [dataid, setDataid] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/get/")
      .then((response) => response.json())
      .then((json) => setData(json.find((car) => car._id == partsId)));
  }, []);

  const {
    title,
    image_url,
    desc,
    Warranty,
    details,
    model,
    odometer,
    shippment_payment,
    stock_number,
    tag_number,
    year,
    gallery,
  } = data;
  console.log(data);

  return (
    <section>
      <div className="partser">
        <p>DETAILS</p>
        <hr />
      </div>
      <div className="singlebody">
        <div className="singleimg">
          <Slider
            style={{
              width: "100%",
            }}
            {...settings}
          >
            {gallery == "" || gallery == null
              ? ""
              : gallery.map((item, index) => {
                  console.log(item);
                  return (
                    <>
                      {/* <div> */}
                      <img
                        src={item}
                        style={{ backgroundRepeat: "no-repeat" }}
                        alt=""
                      />
                      {/* </div> */}
                    </>
                  );
                })}
          </Slider>
        </div>
        <div>
          <h1>{title}</h1>
          <p>Stock Number: {stock_number}</p>
          <h3>DETAILS</h3>
          <p>Model: {model}</p>
          <p>Desc: {desc}</p>
          <p>Year: {year}</p>
          <p>Tag Number: {tag_number}</p>
          <p>Shippment payment: {shippment_payment}</p>
          <h2>DESCRIPTION </h2>

          <Tabs
            defaultActiveKey="DIESEL"
            transition={false}
            id="noanim-tab-example"
            className=" tabs mekada yerguhad"
          >
            <Tab
              style={{ backgroundColor: "black" }}
              eventKey="DIESEL"
              title="Warranty"
            >
              <h4>{Warranty}</h4>
            </Tab>
            <Tab eventKey="PETROL" title="details">
              <h4>{details}</h4>
            </Tab>
            <Tab eventKey="Hybird" title="odometer">
              <h4>{odometer}</h4>
            </Tab>
          </Tabs>
          <br />
          <br />

          <button className="red-btn">
            <a href="#contact">SUBMIT ENQUIRY</a>
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SingleProduct;
