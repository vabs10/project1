import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Nav,
  AlertHeading,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Second = () => {
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
              <ListGroup horizontal defaultActiveKey="/tm">
                <ListGroup.Item action href="/tm">
                  Time & Materials
                </ListGroup.Item>
                <ListGroup.Item action href="/ff">
                  Fixed Fee
                </ListGroup.Item>
                <ListGroup.Item action href="/nb">
                  Non-Billable
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
            

            <Form.Group className="p-2 d-flex justify-content-between align-items-center">
              <button type="button" class="btn px-0 text-muted border-0">
                <Link to="/">&lt; Back</Link>
              </button>
              <div class="d-flex justify-content-center flex-grow-1">
                <button class="btn btn-primary d-flex align-items-center justify-content-center ">
                  Next
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
