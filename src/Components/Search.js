import React, { Component } from "react";
import { FormGroup, Input, Label, Container, Row, Col } from "reactstrap";
import RatingFilter from "./RatingFilter";
const Search = ({ onChange, value, onChangeRating, ratingFilter }) => {
  return (
    <Container className=" mt-3">
      <Row>
        <Col lg="9" xs="6">
          <FormGroup className="m-auto">
            <Input
              type="text"
              onChange={onChange}
              value={value}
              placeholder="type the movie to search"
            />
          </FormGroup>
        </Col>
        <Col lg="3" xs="6">
          <RatingFilter
            rating={ratingFilter}
            onChangeRating={newRating => onChangeRating(newRating)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
