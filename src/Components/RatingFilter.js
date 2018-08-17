import React, { Component } from "react";
import Rating from "./Rating";

const RatingFilter = ({ onChangeRating, rating }) => {
  return (
    <React.Fragment>
      <p className="text-center m-0 p-0">Minimum Rating</p>
      <Rating
        rating={rating}
        onChangeRating={newRating => onChangeRating(newRating)}
      />
    </React.Fragment>
  );
};

export default RatingFilter;
