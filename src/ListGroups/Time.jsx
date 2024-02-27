import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";


const Time = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
          <Form>
            <Form.Group className="p-2">
              <div>
                <Form.Label>Hourly</Form.Label>
              </div>
              <Form.Text className="text-muted">
                We need hourly rates to track your project's billable amount
              </Form.Text>
              <Row>
                <Col xs={6}>
                  <Form.Select aria-label="Default select example">
                    <option selected disabled>
                      Project Hourly Rate
                    </option>
                    <option value="1">300</option>
                    <option value="2">450</option>
                    <option value="3">600</option>
                  </Form.Select>
                </Col>
                <Col xs="auto" className="px-0">
                  <Form.Label> </Form.Label>
                </Col>
                <Col xs={5}>
                  <Form.Control type="text" placeholder="₹ Enter Hourly Rate" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="p-2">
              <div>
                <Form.Label>Budget</Form.Label>
              </div>
              <Form.Text className="text-muted">
                We need hourly rates to track your project's billable amount
              </Form.Text>
              <Row>
                <Col md={6}>
                  <Form.Select aria-label="Hours per Person">
                    <option selected disabled>
                      Hours per Person
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                {/* <Col md="auto"> */}
              </Row>
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Check // prettier-ignore
                type="checkbox"
                label="Budget resets every month"
              />
              <Form.Check
                type="checkbox"
                inline // Ensures elements are displayed on the same line
                label={
                  <>
                    Send email alerts if budget exceeds
                    <input
                      type="number"
                      placeholder="10"
                      min={1}
                      style={{ width: "50px" }}
                    />
                    % of budget
                  </>
                }
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Time;
