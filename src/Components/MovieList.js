import React, { Component } from "react";
import Movie from "./Movie";
import ModalMovie from "./ModalMovie";

const MovieList = ({
  onChangeRating,
  toggle,
  modal,
  handleAdd,
  movies,
  remove
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {movies.map((movie, i) => (
          <Movie
            key={i}
            movie={movie}
            index={i}
            onChangeRating={onChangeRating}
            remove={() => remove(movie.id)}
          />
        ))}

        <div className="col-sm-6 col-lg-3 col-md-4 mb-4 ">
          <img
            style={{ cursor: "pointer" }}
            className="add m-auto"
            src={require("../res/add.png")}
            width="80%"
            height="auto"
            onClick={toggle}
          />
        </div>
        <ModalMovie modal={modal} toggle={toggle} handleAdd={handleAdd} />
      </div>
    </div>
  );
};

export default MovieList;
