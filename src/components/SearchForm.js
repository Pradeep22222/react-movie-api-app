import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
export const SearchForm = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center">My movie list</h1>
      <Form className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="enter movie name" />
          </Col>
          <Col>
            <Button variant="primary">Search</Button>{" "}
          </Col>
        </Row>
      </Form>
    </div>
  );
}
