import React, { Component } from "react";
import Star from "./Star";

const Rating = ({ rating, onChangeRating }) => {
  let stars = [];
  for (let i = 0; i < 5; i++)
    stars.push(
      <Star
        key={i}
        index={i + 1}
        onChangeRating={() => onChangeRating(i + 1)}
        empty={i + 1 > rating ? true : false}
      />
    );
  return <div className="text-center">{stars}</div>;
};

export default Rating;
