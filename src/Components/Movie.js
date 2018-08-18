import React, { Component } from "react";
import Rating from "./Rating";
import { Row } from "reactstrap";
const Movie = ({ movie, remove, edit, index, onChangeRating = () => {} }) => {
  return (
    <div className="col-sm-6 col-lg-2 col-md-3 mb-4">
      <div class="card pb-1">
        <img
          src={movie.image}
          onerror="this.onerror=null;this.src='../res/add.png';"
          className="card-img-top "
          alt=""
          height="180vh"
          width="auto"
        />
        <div className="card-body text-center p-0 m-0">
          <h4 className="card-title m-0 p-0">
            <p className="m-0 p-0">{movie.name}</p>
          </h4>
          <span className="movie-year text-center m-0 p-0 text-muted">
            {movie.annee}
          </span>
          <p className="card-text mb-0 m-0">{movie.description}</p>

          <div className="row no-gutters rating container">
            <div className="col-2 ">
              <img
                className="hoverBig"
                src={require("../res/edit.png")}
                style={{ cursor: "pointer" }}
                onClick={() => edit(movie)}
              />
            </div>
            <div className="col-8">
              <Rating
                rating={movie.rating}
                onChangeRating={newRating =>
                  onChangeRating(newRating, movie.id)
                }
              />
            </div>
            <div className="col-2">
              <img
                className="hoverBig"
                src={require("../res/remove.png")}
                style={{ cursor: "pointer" }}
                onClick={remove}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
