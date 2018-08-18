import React, { Component } from "react";
import Rating from "./Rating";
import { Row } from "reactstrap";
const Movie = ({ movie, remove, edit, index, onChangeRating = () => {} }) => {
  return (
    <div className="col-sm-6 col-lg-3 col-md-4 mb-4">
      <div class="card pb-1">
        <img
          src={movie.image}
          onerror="this.onerror=null;this.src='../res/add.png';"
          className="card-img-top "
          alt=""
          height="140vh"
        />
        <div className="card-body text-center p-0 m-0">
          <h4 className="card-title m-0 p-0">
            <strong>{movie.name}</strong>
          </h4>
          <span className="movie-year text-center m-0 p-0">{movie.annee}</span>
          <p className="card-text mb-0 m-0">{movie.description}</p>

          <div className="row">
            <div className="col-3">
              <img
                src={require("../res/edit.png")}
                style={{ cursor: "pointer" }}
                onClick={() => edit(movie)}
              />
            </div>
            <div className="col-6">
              <Rating
                rating={movie.rating}
                onChangeRating={newRating =>
                  onChangeRating(newRating, movie.id)
                }
              />
            </div>
            <div className="col-3">
              <img
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
