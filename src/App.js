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
      movies: []
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

  handleAdd = (name, year, url, desc) => {
    let movies = [...this.state.movies];
    movies.push({
      id: this.lastId() + 1,
      name: name,
      annee: year,
      image: url,
      rating: 1,
      description: desc
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
        />
      </React.Fragment>
    );
  }
}

export default App;
