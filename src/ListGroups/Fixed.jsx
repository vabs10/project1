import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Fixed = () => {
  return (
    <Container >
      <Row>
        <Col>
          <Form>
            <Form.Group className="p-2">
              <div>
                <Form.Label>Fixed Fee</Form.Label>
              </div>
              <Form.Text className="text-muted">
                Enter the fixed fee amount for the project
              </Form.Text>
              <Row>
                <Col xs={12}>
                  <Form.Control type="text" placeholder="Enter Fixed Fee" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="p-2">
              <Form.Check
                type="checkbox"
                label="Notify me when fixed fee is exceeded"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Fixed;
