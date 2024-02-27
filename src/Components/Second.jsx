import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  AlertHeading,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Time from "../ListGroups/Time";
import Fixed from "../ListGroups/Fixed";
import NonBillable from "../ListGroups/NonBillable";

const Second = () => {
  const [selectedComponent, setSelectedComponent] = useState("tm");

  const handleItemClick = (eventKey) => {
    // console.log("Clicked:", eventKey); // Debugging statement
    setSelectedComponent(eventKey);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "tm":
        return <Time />;
      case "ff":
        return <Fixed />;
      case "nb":
        return <NonBillable />;
      default:
        return null;
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <div className="p-3">
            <AlertHeading className="d-flex align-items-center justify-content-center p-3">
              Project type
            </AlertHeading>
            <Form.Label className="d-flex align-items-center justify-content-center p-1 text-muted">
              Don't panic - You can also customize this types in settings
            </Form.Label>
          </div>
          <Form>
            <Form.Group className="d-flex align-items-center justify-content-center p-2">
              <ListGroup horizontal>
                <ListGroup.Item
                  action
                  active={selectedComponent === "tm"}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleItemClick("tm");
                  }}
                >
                  Time & Materials
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  active={selectedComponent === "ff"}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleItemClick("ff");
                  }}
                >
                  Fixed Fee
                </ListGroup.Item>
                <ListGroup.Item
                  action
                  active={selectedComponent === "nb"}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleItemClick("nb");
                  }}
                >
                  Non-Billable
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
            <div
              className="d-flex align-items-start justify-content-center"
              style={{ height: "295px", overflowY: "auto" }}
            >
              {renderComponent()}
            </div>{" "}
            <Form.Group className="p-2 d-flex justify-content-between align-items-center">
              <button type="button" className="btn px-0 text-muted border-0">
                <Link to="/" style={{ color: "gray" }}>&lt; Back</Link>
              </button>
              <div class="d-flex justify-content-center flex-grow-1">
                <button class="btn btn-primary d-flex align-items-center justify-content-center">
                  <Link to="/3" style={{ color: "white" }}>
                    Next
                  </Link>
                </button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Second;
