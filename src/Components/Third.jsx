import React from "react";
import { Container, Row, Col, Form, AlertHeading, Card } from "react-bootstrap";
import { CardList, Boxes } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Third = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <div className="p-2">
            <AlertHeading className="d-flex align-items-center justify-content-center p-3">
              Select a view
            </AlertHeading>
            <Form.Label className="d-flex align-items-center justify-content-center p-1 text-muted">
              You can also customize this views in settings
            </Form.Label>
          </div>
          <Form>
            <Form.Group className="p-2" style={{ marginBottom: "200px" }}>
              <Row>
                <Col className="d-flex justify-content-center">
                  <div className="d-flex flex-column align-items-center">
                  <Card style={{width:"200px", height:"120px"}}>
                      <Card.Body className="d-flex align-items-center justify-content-center">
                        <CardList  size={50} />
                      </Card.Body>
                    </Card>
                    <div className="text-center mt-2">List</div>
                  </div>
                </Col>
                <Col className="d-flex justify-content-center">
                  <div className="d-flex flex-column align-items-center">
                  <Card style={{width:"200px", height:"120px"}}>
                      <Card.Body className="d-flex align-items-center justify-content-center">
                        <Boxes size={50} />
                      </Card.Body>
                    </Card>
                    <div className="text-center mt-2">Board</div>
                  </div>
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="p-2 d-flex justify-content-between align-items-center">
              <button type="button" className="btn px-0 text-muted border-0">
                <Link to="/2">&lt; Back</Link>
              </button>
              <div className="d-flex justify-content-center flex-grow-1">
                <button className="btn btn-primary d-flex align-items-center justify-content-center">
                  <Link to="/4" style={{ color: "white" }}>
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

export default Third;
