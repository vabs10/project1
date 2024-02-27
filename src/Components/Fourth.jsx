import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  AlertHeading,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import {
  PersonCircle,
  People,
  UniversalAccessCircle,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Fourth = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <div className="p-2">
            <AlertHeading className="d-flex align-items-center justify-content-center p-3">
              Who can manage projects
            </AlertHeading>
            <Form.Label className="d-flex align-items-center justify-content-center p-1 text-muted">
              Don't panic - You can also customize this permissions in settings
            </Form.Label>
          </div>
          <Form>
            <Form.Group style={{ marginBottom: "90px" }}>
              {/* Using ListGroup and ListGroup.Item for consistent styling and hover effect */}
              <ListGroup className="p-1 m-3 border rounded hover">
                <ListGroup.Item action className="d-flex align-items-center">
                  <Col md={3}>
                    <UniversalAccessCircle
                      style={{ fontSize: "45px", padding: "5px" }}
                    />
                  </Col>
                  <Col md={9}>
                    <span>Everyone</span>
                    <br />
                    <span>
                      All users can now see it, but guests cannot access the projects.
                    </span>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item action className="d-flex align-items-center hover-item hover:outline-2 hover:blue-500">
                  <Col md={3}>
                    <PersonCircle style={{ fontSize: "45px", padding: "5px" }} />
                  </Col>
                  <Col md={9}>
                    <span>Only Admin's</span>
                    <br />
                    <span>Only admins can manage everything.<br/></span><br/>
                  </Col>
                </ListGroup.Item>

                <ListGroup.Item action className="d-flex align-items-center hover">
                  <Col md={3}>
                    <People style={{ fontSize: "45px", padding: "5px" }} />
                  </Col>
                  <Col md={9}>
                    <span>Only to Specific people</span>
                    <br />
                    <span>Only some specific people can able to see it.<br/></span>
                    <br/>
                  </Col>
                </ListGroup.Item>
              </ListGroup>

              {/* ... rest of your component code ... */}
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Fourth;
