import React, { Component } from "react";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
import { config } from "./config";
import * as firebase from "firebase";
class App extends Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
    this.moviesRef = firebase.database().ref("movies");
    this.state = {
      loading: true,
      modal: false,
      filter: "",
      ratingFilter: 0,
      movies: [],
      moviename: "",
      movieyear: "",
      imgurl: "",
      moviedesc: "",
      update: false,
      updateId: 0
    };
  }

  componentWillMount() {
    this.moviesRef.on("value", moviesFirebase => {
      let movies = moviesFirebase.val();
      if (movies !== null) {
        movies = movies.filter(movie => movie !== undefined);
        this.setState({
          movies: movies,
          loading: false
        });
      } else this.setState({ movies: [], loading: false });
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  lastId = () => {
    const movies = [...this.state.movies];
    return movies.reduce((max, el) => (el.id > max ? el.id : max), -1);
  };

  handleAdd = () => {
    let movies = [...this.state.movies];
    let id =
      this.state.update === true ? this.state.updateId : this.lastId() + 1;
    if (this.state.update === true) {
      let movie = movies.find(movie => movie.id === id);
      movie.name = this.state.moviename;
      movie.annee = this.state.movieyear;
      movie.description = this.state.moviedesc;
      movie.image = this.state.imgurl;

      this.setState({ update: false });
    } else {
      movies.push({
        id: id,
        name: this.state.moviename,
        annee: this.state.movieyear,
        image: this.state.imgurl,
        rating: 1,
        description: this.state.moviedesc
      });
    }

    this.setState({
      moviename: "",
      moviedesc: "",
      movieyear: "",
      imgurl: ""
    });

    //optionnel
    //this.setState({ movies });

    this.moviesRef.set({ ...movies });

    //this.setState({ movies });
    this.toggle();
  };

  getFiltredMovies = () => {
    return this.state.movies.filter(
      movie =>
        movie.name.toLowerCase().includes(this.state.filter.toLowerCase()) &&
        movie.rating >= this.state.ratingFilter
    );
  };

  onChangeRating = (newRating, id) => {
    const movies = [...this.state.movies];
    let movie = movies.find(movie => movie.id === id);
    movie.rating = newRating;

    //optionnel
    //this.setState({ movies });

    this.moviesRef.set({ ...movies });
  };

  remove = id => {
    let movies = [...this.state.movies];
    movies = movies.filter(movie => movie.id !== id);

    console.log(movies);

    this.moviesRef.set({ ...movies });
  };

  edit = movie => {
    this.setState({
      imgurl: movie.image,
      moviename: movie.name,
      movieyear: movie.annee,
      moviedesc: movie.description,
      update: true,
      updateId: movie.id
    });
    this.toggle();
  };

  render() {
    return (
      <React.Fragment>
        <Search
          onChange={evt => this.setState({ filter: evt.target.value })}
          value={this.state.filter}
          ratingFilter={this.state.ratingFilter}
          onChangeRating={newRating =>
            this.setState({ ratingFilter: newRating })
          }
        />
        {this.state.loading && (
          <div className="m-auto text-center">
            <img className="m-auto" src={require("./res/loading.gif")} />
          </div>
        )}
        <MovieList
          filter={this.state.filter}
          movies={this.getFiltredMovies()}
          modal={this.state.modal}
          handleAdd={this.handleAdd}
          toggle={this.toggle}
          onChangeRating={(newRating, indexMovie) =>
            this.onChangeRating(newRating, indexMovie)
          }
          remove={this.remove}
          edit={this.edit}
          handleImgUrl={event => this.setState({ imgurl: event.target.value })}
          handleMovieName={event =>
            this.setState({ moviename: event.target.value })
          }
          handleMovieDesc={event =>
            this.setState({ moviedesc: event.target.value })
          }
          handleMovieYear={event =>
            this.setState({ movieyear: event.target.value })
          }
          imgurl={this.state.imgurl}
          moviename={this.state.moviename}
          moviedesc={this.state.moviedesc}
          movieyear={this.state.movieyear}
        />
      </React.Fragment>
    );
  }
}

export default App;
