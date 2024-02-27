import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const NonBillable = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group className="p-2">
              <div>
                <Form.Label>Non-Billable</Form.Label>
              </div>
              <Form.Text className="text-muted">
                Enter details for non-billable project aspects
              </Form.Text>
              <Row>
                <Col xs={12}>
                  <Form.Control type="text" placeholder="Enter details" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="p-2">
              <Form.Check
                type="checkbox"
                label="This project is non-billable"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NonBillable;
