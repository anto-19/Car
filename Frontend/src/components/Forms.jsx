import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

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

function Forms() {
  const form = useRef();

  const handleButtonclick = () => {
    handleReset();
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
    // Add more inputs if needed
  };

  const [inputValues, setInputValues] = useState(initialInputState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleReset = () => {
    setInputValues(initialInputState);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5nd6hnl", "template_9vlz4or", form.current, {
        publicKey: "_BYXJis6Yy2J2kw-V",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          notify();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    handleReset();
  };
  return (
    <Container className="bootstrap-form">
      <Form id="contact" ref={form} onSubmit={sendEmail}>
        <Row>
          <Col>
            <Form.Group controlId="form1Input1">
              <Form.Label style={{ marginTop: "20px" }}>FULL NAME </Form.Label>
              <FormControl
                required
                type="text"
                name="input1"
                value={inputValues.input1}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="form1Input2">
              <Form.Label style={{ marginTop: "20px" }}>EMAIL </Form.Label>
              <FormControl
                required
                type="text"
                name="input2"
                value={inputValues.input2}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="form2Input1">
              <Form.Label style={{ marginTop: "20px" }}>SUBJECT </Form.Label>
              <FormControl
                required
                type="text"
                name="input3"
                value={inputValues.input3}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="form2Input2">
              <Form.Label style={{ marginTop: "20px" }}>PHONE </Form.Label>
              <FormControl
                required={true}
                type="text"
                name="input4"
                value={inputValues.input4}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formTextarea">
              <Form.Label style={{ marginTop: "20px" }}>DETAILS</Form.Label>
              <FormControl
                required
                as="textarea"
                rows={6}
                name="input5"
                value={inputValues.input5}
                onChange={handleChange}
              />
              <div
                to="sellyourcar"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <button className="red-btn">SUBMIT</button>
                <ToastContainer />
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Forms;
