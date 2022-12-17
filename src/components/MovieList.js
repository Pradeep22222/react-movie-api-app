import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from './CustomCard';

export const MovieList = ({ movieList }) => {
  const [displayList, setDisplayList] = useState([])
  useEffect(() => {
    setDisplayList(movieList)
  }, [movieList])
  const filterMovie = (type) => {
    if (type === "all") {
      setDisplayList(movieList)
      return;
    }
    const tempArg = movieList.filter((item) => item.type === type)
    setDisplayList(tempArg)
  }
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="secondary"
              onClick={() => {
                filterMovie("all");
              }}
            >
              All
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                filterMovie("comedy");
              }}
            >
              Comedy
            </Button>
            <Button
              variant="success"
              onClick={() => {
                filterMovie("romantic");
              }}
            >
              Romantic
            </Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example">
            <Button variant="warning">Grid</Button>
            <Button variant="info">List</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-between flex-wrap">
          {displayList.map((item, index) => {
            return <CustomCard movie={item}></CustomCard>;
          })}
        </Col>
      </Row>
    </div>
  );
};
