import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import AddCar from "../components/AddCar";
import { BiColor } from "react-icons/bi";
import Addparts from "../components/Addparts";
const Admin = () => {
  return (
    <div>
      <center>
        <h1 style={{ color: "white", margin: "100px" }}>Admin</h1>
      </center>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Cars</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Parts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sell-your-car">Sell your carr</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AddCar />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Addparts />
              </Tab.Pane>
              <Tab.Pane eventKey="sell-your-car">sell your car</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Admin;
