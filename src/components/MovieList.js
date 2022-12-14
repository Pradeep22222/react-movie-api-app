import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from './CustomCard';

export const MovieList = ({movie}) => {
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="secondary">Comedy</Button>
            <Button variant="success">Romantic</Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example">
            <Button variant="warning">Grid</Button>
            <Button variant="info">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between flex-wrap">
          <CustomCard movie={movie}></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
          <CustomCard></CustomCard>
        </Col>
      </Row>
    </div>
  );
}
