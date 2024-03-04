import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import { baseURL } from "../../utils/constant";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const List = ({
  id,
  titile,
  stock_number,
  setUpdateUI,
  updateMode,
  tiver,
  img,
  model,
  year,
  desc,
  tag_number,
  odometer,
  details,
  Warranty,
  shippment_payment,
  image_url,
  gallery,
  category,
}) => {
  const removeTask = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res);
      setUpdateUI;
      (preveState) => !preveState;
    });
  };
  // console.log(id);

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={12}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Table
                  responsive="sm"
                  style={{ maxWidth: "100%", margin: "0 auto" }}
                >
                  <tbody className="text-center">
                    <tr>
                      <td>{tiver}</td>
                      <td>
                        <img src={img} alt={img} style={{ width: "100px" }} />
                      </td>
                      <td>{model}</td>
                      <td>{year}</td>
                      <td>{titile}</td>

                      <td>
                        <BsTrash className="iconnn" onClick={removeTask} />
                      </td>
                      <td>
                        <BiEditAlt
                          className="iconnn"
                          onClick={() =>
                            updateMode(
                              id,
                              titile,
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
                            )
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};

export default List;
