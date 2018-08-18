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
  handleMovieYear
}) => {
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="movie-name">Movie Name</Label>
            <Input
              type="text"
              name="name"
              id="movie-name"
              placeholder="movie name"
              value={moviename}
              onChange={handleMovieName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="movie-img">Movie Image URL</Label>
            <Input
              type="text"
              name="url-img"
              id="movie-img"
              placeholder="image url"
              value={imgurl}
              onChange={handleImgUrl}
            />
          </FormGroup>
          <FormGroup>
            <Label for="movie-year">Year</Label>
            <Input
              type="number"
              min="1800"
              max="2099"
              step="1"
              id="movie-year"
              value={movieyear}
              onChange={handleMovieYear}
            />
          </FormGroup>
          <FormGroup>
            <Label for="desc">Description</Label>
            <Input
              type="textarea"
              name="text"
              id="desc"
              value={moviedesc}
              onChange={handleMovieDesc}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          onClick={() => handleAdd(moviename, movieyear, imgurl, moviedesc)}
        >
          Add
        </Button>
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalMovie;
