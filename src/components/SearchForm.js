import React, { useState } from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
export const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setStr(value)
    };

  return (
    <div className="mt-5">
      <h1 className="text-center">My movie list</h1>
          <Form onSubmit={(e) => { e.preventDefault(); handleOnSubmit(str)}} className="mt-5">
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              onChange={handleOnChange}
                          placeholder="enter movie name"
                          required
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>{" "}
          </Col>
        </Row>
      </Form>
    </div>
  );
};
