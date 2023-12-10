import MovieList from "../components/MovieList";

import movies from "./../data/data";

const Home = () => {
  return (
    <section>
      <MovieList dataArr={movies} />
    </section>
  );
};

export default Home;
