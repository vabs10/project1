import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  AlertHeading,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div
              className="d-flex align-items-start justify-content-center"
              style={{ height: "295px" }}
            >
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <AlertHeading className="d-flex align-items-center justify-content-center p-3">
            Create a project
          </AlertHeading>
          <Form>
            <Form.Group className="p-2">
              <Form.Label>Project name</Form.Label>
              <Form.Control type="text" placeholder="Enter project name here" />
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label>Client</Form.Label>
              <Row>
                <Col md={6}>
                  <Form.Select aria-label="Default select example">
                    <option selected disabled>Select a client</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                {/* <Col md="auto"> */}
                <Col
                  md={1}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Form.Label>Or</Form.Label>
                </Col>
                <Col md={5}>
                  <Form.Control type="text" placeholder="+ New Client" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label>Dates</Form.Label>
              <Row className="align-items-center">
                <Col l={5}>
                  <Form.Control type="date" defaultValue="2019-10-25" />
                </Col>
                <Col md="auto" className="px-0">
                  <Form.Label>-</Form.Label>
                </Col>
                <Col l={5}>
                  <Form.Control type="date" defaultValue="2019-10-25" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                cols={6}
                placeholder="Enter project name here"
              />
            </Form.Group>

            <Form.Group className="p-2 d-flex justify-content-between align-items-center">
              <button type="button" class="btn px-0 text-muted border-0">
                &lt; Back
              </button>
              <div class="d-flex justify-content-center flex-grow-1">
                <button class="btn btn-primary d-flex align-items-center justify-content-center">
                  <Link to="/2" style={{ color: "white" }}>
                    Next
                  </Link>
                </button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default First;
