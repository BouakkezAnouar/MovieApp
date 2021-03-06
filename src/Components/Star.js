import React from "react";
const Star = ({ empty, onChangeRating }) => {
  return (
    <img
      className="star"
      style={{ cursor: "pointer" }}
      src={
        empty === true
          ? require("../res/emty-star.png")
          : require("../res/star.png")
      }
      onClick={onChangeRating}
    />
  );
};

export default Star;
