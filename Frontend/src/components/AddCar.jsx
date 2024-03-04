import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";
import { baseURL } from "../../utils/constant";
import "../css/list.css";
import { Table } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const AddCar = () => {
  const [titile, settitile] = useState("");
  const [MakeModel, setMakeModel] = useState("");
  const [Desc, setDesc] = useState("");
  const [Year, setYear] = useState("");
  const [StockNumber, setStockNumber] = useState("");
  const [TagNumber, setTagNumber] = useState("");
  const [Odometer, setOdometer] = useState("");
  const [Details, setDetails] = useState("");
  const [Warranty, setWarranty] = useState("");
  const [shippmentPayment, setShippmentPayment] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [gallery, setGallery] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [updateUI, setupdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const covertToBase64 = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      console.log(reader.result);
      setImg(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };
  const covertToBas64Gallery = (e) => {
    for (const filee of e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(filee);

      reader.onload = () => {
        setGallery((prev) => [...prev, reader.result]);
      };
      reader.onerror = (error) => {
        console.log("Error", error);
      };
    }
  };

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      setTasks(res.data);
    });
  }, [updateUI]);

  const addTask = () => {
    // notify();
    axios
      .post(`${baseURL}/save`, {
        title: titile,
        stock_number: StockNumber,
        model: MakeModel,
        desc: Desc,
        year: Year,
        tag_number: TagNumber,
        odometer: Odometer,
        details: Details,
        Warranty: Warranty,
        shippment_payment: shippmentPayment,
        image_url: img,
        gallery: gallery,
        category: category,
      })
      .then((res) => {
        settitile("");
        setMakeModel("");
        setDesc("");
        setYear("");
        setStockNumber("");
        setTagNumber("");
        setOdometer("");
        setDetails("");
        setWarranty("");
        setShippmentPayment("");
        setImg("");
        setCategory("");
        setGallery([]);
        setupdateUI((prevState) => !prevState);
      });
    // location.reload();
  };

  const updateMode = (
    id,
    title,
    model,
    year,
    stock_number,
    desc,
    tag_number,
    odometer,
    details,
    Warranty,
    shippment_payment,
    image_url,
    gallery,
    category
  ) => {
    // console.log(id);

    settitile(title);
    setMakeModel(model);
    setDesc(desc);
    setYear(year);
    setStockNumber(stock_number);
    setTagNumber(tag_number);
    setOdometer(odometer);
    setDetails(details);
    setWarranty(Warranty);
    setShippmentPayment(shippment_payment);
    setImg(image_url);
    setCategory(category);
    setGallery((prev) => [...prev, gallery]);
    setupdateUI((prevState) => !prevState);
    setUpdateId(id);
  };
  const updateTask = () => {
    console.log(gallery);
    axios
      .put(`${baseURL}/update/${updateId}`, {
        title: titile,
        stock_number: StockNumber,
        model: MakeModel,
        desc: Desc,
        year: Year,
        tag_number: TagNumber,
        odometer: Odometer,
        details: Details,
        Warranty: Warranty,
        shippment_payment: shippmentPayment,
        image_url: img,
        gallery: gallery,
        category: category,
      })
      .then((res) => {
        setUpdateId(null);
        settitile("");
        setMakeModel("");
        setDesc("");
        setYear("");
        setStockNumber("");
        setTagNumber("");
        setOdometer("");
        setDetails("");
        setWarranty("");
        setShippmentPayment("");
        setImg("");
        setCategory("");
        setGallery([]);
        setupdateUI((prevState) => !prevState);
      });
    // location.reload();
  };

  return (
    <main>
      <div className="input_holder" style={{ margin: "0 auto !important" }}>
        <div>
          <input
            type="text"
            value={titile}
            placeholder="titile"
            onChange={(e) => settitile(e.target.value)}
          />
          <input
            type="text"
            value={MakeModel}
            placeholder="MakeModel"
            onChange={(e) => setMakeModel(e.target.value)}
          />
          <input
            type="text"
            value={Desc}
            placeholder="Desc"
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="text"
            value={Year}
            placeholder="Year"
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="StockNumber"
            value={StockNumber}
            onChange={(e) => setStockNumber(e.target.value)}
          />

          <input
            type="text"
            value={TagNumber}
            placeholder="TagNumber"
            onChange={(e) => setTagNumber(e.target.value)}
          />

          <input
            type="text"
            value={Details}
            placeholder="Details"
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>

        <div>
          <textarea
            rows="2"
            cols="30"
            type="text"
            value={Odometer}
            placeholder="Odometer"
            onChange={(e) => setOdometer(e.target.value)}
          />
          <textarea
            type="text"
            value={Warranty}
            placeholder="Warranty"
            onChange={(e) => setWarranty(e.target.value)}
          />
          <textarea
            type="text"
            value={shippmentPayment}
            placeholder="shippmentPayment"
            onChange={(e) => setShippmentPayment(e.target.value)}
          />

          <div style={{ color: "white", marginTop: "30px" }}>
            <input
              type="file"
              // value={img}

              onChange={covertToBase64}
            />
            {img == "" || img == null ? (
              ""
            ) : (
              <img src={img} alt="" width={50} height={50} />
            )}

            <input
              type="file"
              multiple
              // value={gallery}

              onChange={covertToBas64Gallery}
            />
            {gallery == "" || gallery == null
              ? ""
              : gallery.map((item, index) => {
                  console.log(item);
                  return (
                    <div key={index}>
                      <img src={item} alt="" width={50} height={50} />
                    </div>
                  );
                })}
          </div>
          <div style={{ color: "white", marginTop: "30px" }}>
            <h3>add to carousel or not </h3>
            <label name="diesel">
              <input
                type="radio"
                value="diesel"
                name="type"
                onChange={(e) => setCategory(e.target.value)}
                checked={category == "diesel"}
              />
              DISESEL
            </label>
            <label name="petrol">
              <input
                type="radio"
                value="petrol"
                name="type"
                onChange={(e) => setCategory(e.target.value)}
                checked={category == "petrol"}
              />
              PETROL
            </label>
            <label name="hybrid">
              <input
                type="radio"
                value="hybrid"
                name="type"
                onChange={(e) => setCategory(e.target.value)}
                checked={category == "hybrid"}
              />
              HYBRID
            </label>
            <label name="none">
              <input
                type="radio"
                value="none"
                name="type"
                onChange={(e) => setCategory(e.target.value)}
                checked={category == "none"}
              />
              None
            </label>
          </div>
        </div>
        <button type="submit" onClick={updateId ? updateTask : addTask}>
          {updateId ? "Update Task" : "Add Task"}
        </button>
      </div>

      <ul>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={12}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h2 className="text-center" style={{ color: "white" }}>
                    Cars
                  </h2>
                  <Table
                    responsive="sm"
                    style={{ maxWidth: "100%", margin: "0 auto" }}
                  >
                    <thead>
                      <tr className="text-center">
                        <th>#</th>
                        <th>thumb</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Title</th>
                        <th>Remove</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                  </Table>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {tasks.map((task, tiver) => (
          <List
            key={task._id}
            id={task._id}
            titile={task.title}
            img={task.image_url}
            model={task.model}
            year={task.year}
            desc={task.desc}
            stock_number={task.stock_number}
            tag_number={task.tag_number}
            odometer={task.odometer}
            details={task.details}
            Warranty={task.Warranty}
            shippment_payment={task.shippment_payment}
            image_url={task.image_url}
            gallery={task.gallery}
            category={task.category}
            setUpdateUI={setupdateUI}
            updateMode={updateMode}
            tiver={tiver}
          />
        ))}
      </ul>
    </main>
  );
};

export default AddCar;
