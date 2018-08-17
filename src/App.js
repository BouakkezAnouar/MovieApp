import React, { Component } from "react";
import MovieList from "./Components/MovieList";
import Search from "./Components/Search";
class App extends Component {
  images = [
    "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg",
    "https://mdbootstrap.com/img/Photos/Others/men.jpg",
    "http://factinteres.ru/wp-content/uploads/2016/09/IMG-Worlds-of-Adventure-1-945x776.jpg",
    "https://m.kajgana.com/sites/default/files/styles/full_size/public/2016/12/12/images/img-310004.jpg"
  ];
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      filter: "",
      ratingFilter: 0,
      movies: [
        {
          id: 0,
          name: "spiderman",
          annee: "2011",
          rating: 2,
          image: this.images[0],
          description: "une good film"
        },
        {
          id: 1,
          name: "taken",
          annee: "2013",
          rating: 3,
          image: this.images[2],

          description: "une bad film"
        },
        {
          id: 2,
          name: "need for speed",
          annee: "2012",
          rating: 4,
          image: this.images[3],

          description: "une bad film"
        },
        {
          id: 3,
          name: "saw",
          annee: "2011",
          rating: 1,
          image: this.images[0],
          description: "une good film"
        }
      ]
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  lastId = () => {
    const movies = [...this.state.movies];
    return movies.reduce((max, el) => (el.id > max ? el.id : max), 0);
  };

  handleAdd = (name, year, url, desc) => {
    const movies = [...this.state.movies];
    console.log(movies);
    movies.push({
      id: this.lastId() + 1,
      name: name,
      annee: year,
      image: url,
      rating: 1,
      description: desc
    });
    console.log(movies);

    this.setState({ movies });
    this.toggle();
  };

  getFiltredMovies = () => {
    return this.state.movies.filter(
      movie =>
        movie.name.toLowerCase().includes(this.state.filter.toLowerCase()) &&
        movie.rating >= this.state.ratingFilter
    );
  };

  onChangeRating = (newRating, index) => {
    const movies = [...this.state.movies];
    movies[index].rating = newRating;

    this.setState({ movies });
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
        <MovieList
          filter={this.state.filter}
          movies={this.getFiltredMovies()}
          modal={this.state.modal}
          handleAdd={this.handleAdd}
          toggle={this.toggle}
          onChangeRating={(newRating, indexMovie) =>
            this.onChangeRating(newRating, indexMovie)
          }
        />
      </React.Fragment>
    );
  }
}

export default App;
