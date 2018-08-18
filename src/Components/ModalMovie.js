import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

const ModalMovie = ({
  modal,
  toggle,
  handleAdd,
  moviename,
  moviedesc,
  movieyear,
  imgurl,
  handleMovieName,
  handleImgUrl,
  handleMovieDesc,
  handleMovieYear,
  isValidDescription,
  isValidName,
  isValidUrl,
  isValidYear,
  update
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {update ? "Modify Movie" : "Add Movie"}
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="movie-name">Movie Name</Label>
            <Input
              className={"form-control ".concat(
                isValidName === true ? "is-valid" : "is-invalid"
              )}
              type="text"
              name="name"
              id="movie-name"
              placeholder="movie name"
              value={moviename}
              onChange={handleMovieName}
            />
            <div
              className={isValidName ? "valid-feedback" : "invalid-feedback"}
            >
              {isValidName
                ? "Looks good!"
                : "must at least 3 caracters and at max 30"}
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="movie-img">Movie Image URL</Label>
            <Input
              className={"form-control ".concat(
                isValidUrl === true ? "is-valid" : "is-invalid"
              )}
              type="text"
              name="url-img"
              id="movie-img"
              placeholder="image url"
              value={imgurl}
              onChange={handleImgUrl}
            />
            <div className={isValidUrl ? "valid-feedback" : "invalid-feedback"}>
              {isValidUrl
                ? "Looks good!"
                : "must be a valid url image (png,jpg,jpeg...)"}
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="movie-year">Year</Label>
            <Input
              className={"form-control ".concat(
                isValidYear === true ? "is-valid" : "is-invalid"
              )}
              type="number"
              min="1800"
              max="2099"
              step="1"
              id="movie-year"
              value={movieyear}
              onChange={handleMovieYear}
            />
            <div
              className={isValidYear ? "valid-feedback" : "invalid-feedback"}
            >
              {isValidYear ? "Looks good!" : "must between 1800 and 2019"}
            </div>
          </FormGroup>
          <FormGroup>
            <Label for="desc">Description</Label>
            <Input
              className={"form-control ".concat(
                isValidDescription === true ? "is-valid" : "is-invalid"
              )}
              type="textarea"
              name="text"
              id="desc"
              value={moviedesc}
              onChange={handleMovieDesc}
            />
            <div
              className={
                isValidDescription ? "valid-feedback" : "invalid-feedback"
              }
            >
              {isValidDescription
                ? "Looks good!"
                : "must be at least 10 caracters"}
            </div>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          onClick={() => handleAdd(moviename, movieyear, imgurl, moviedesc)}
        >
          {update ? "Modify" : "Add"}
        </Button>
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalMovie;
