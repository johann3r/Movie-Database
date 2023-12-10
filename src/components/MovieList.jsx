import "./MovieList.scss";
import MovieItem from "./MovieItem";
import { useState } from "react";
import movies from "./../data/data";

const MovieList = () => {
  console.log();
  const [movie, setMovie] = useState(movies);
  const [button, setbutton] = useState();

  // Sort ascending by Date
  const sortAscending = () => {
    const sortedMovies = [...movie].sort(
      (movieA, movieB) => movieA.year - movieB.year
    );
    setMovie(sortedMovies);
  };

  // Sort descending by Date
  const sortDescending = () => {
    const sortedMovies = [...movie].sort(
      (movieA, movieB) => movieB.year - movieA.year
    );
    setMovie(sortedMovies);
  };

  // Sort descending by rated
  const bestRated = () => {
    const sortedMovies = [...movie].sort(
      (movieA, movieB) => movieB.rate - movieA.rate
    );
    setMovie(sortedMovies);
  };

  // Sort ascending by title
  const aToZ = () => {
    const sortedMovies = [...movie].sort((movieA, movieB) => {
      if (movieA.title < movieB.title) {
        return -1;
      } else if (movieA.title > movieB.title) {
        return 1;
      }
    });
    setMovie(sortedMovies);
  };

  // Sort descending by title
  const zToA = () => {
    const sortedMovies = [...movie].sort((movieA, movieB) => {
      if (movieA.title < movieB.title) {
        return 1;
      } else if (movieA.title > movieB.title) {
        return -1;
      }
    });
    setMovie(sortedMovies);
  };

  return (
    <section className="movielist-wrapper">
      <h1>Movies Schmovies</h1>
      <section className="filterbar">
        <button className="primaryButton" onClick={sortAscending}>
          Sort by date ascending
        </button>
        <button className="primaryButton" onClick={sortDescending}>
          Sort by date descending
        </button>
        <button className="primaryButton" onClick={bestRated}>
          Best rate
        </button>
        <button className="primaryButton" onClick={aToZ}>
          A-Z
        </button>
        <button className="primaryButton" onClick={zToA}>
          Z-A
        </button>
      </section>
      <section className="movielist">
        {movie.map((singleMovie, index) => (
          <MovieItem
            key={index}
            title={singleMovie.title}
            year={singleMovie.year}
            director={singleMovie.director}
            duration={singleMovie.duration}
            rate={singleMovie.rate}
            genre={singleMovie.genre}
          />
        ))}
      </section>
    </section>
  );
};

export default MovieList;
