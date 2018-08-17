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

class ModalMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviename: "",
      movieyear: "",
      imgurl: "",
      moviedesc: ""
    };
  }

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="movie-name">Movie Name</Label>
              <Input
                type="text"
                name="name"
                id="movie-name"
                placeholder="movie name"
                value={this.state.moviename}
                onChange={event =>
                  this.setState({ moviename: event.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="movie-img">Movie Image URL</Label>
              <Input
                type="text"
                name="url-img"
                id="movie-img"
                placeholder="image url"
                value={this.state.imgurl}
                onChange={event =>
                  this.setState({ imgurl: event.target.value })
                }
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
                value={this.state.movieyear}
                onChange={event =>
                  this.setState({ movieyear: event.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="desc">Description</Label>
              <Input
                type="textarea"
                name="text"
                id="desc"
                value={this.state.moviedesc}
                onChange={event =>
                  this.setState({ moviedesc: event.target.value })
                }
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="success"
            onClick={() =>
              this.props.handleAdd(
                this.state.moviename,
                this.state.movieyear,
                this.state.imgurl,
                this.state.moviedesc
              )
            }
          >
            Add
          </Button>
          <Button color="danger" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
export default ModalMovie;
