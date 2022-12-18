import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import CustomCard from "./CustomCard";
import CustomList from "./CustomList";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [displayList, setDisplayList] = useState([]);
  const [view, setView] = useState("grid");
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);
  const filterMovie = (type) => {
    if (type === "all") {
      setDisplayList(movieList);
      return;
    }
    const tempArg = movieList.filter((item) => item.type === type);
    setDisplayList(tempArg);
  };
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
            <Button variant="warning" onClick={()=>setView("grid")}>Grid</Button>
            <Button variant="info" onClick={() => setView("list")}>List</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <h6 className="mt-3">{displayList.length} movies found!</h6>
      <Row>
        <Col className="d-flex justify-content-between flex-wrap">
          {displayList.map((item, index) =>
            view === "grid" ? (
              <CustomCard
                movie={item}
                deleteMovie={deleteMovie}
                key={index}
              ></CustomCard>
            ) : (
              <CustomList
                movie={item}
                deleteMovie={deleteMovie}
                key={index}
              ></CustomList>
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
