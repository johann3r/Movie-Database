import "./MovieItem.scss";

const MovieItem = ({ title, year, director, duration, rate, genre }) => {
  return (
    <article className="movieitem">
      <h2>{title}</h2>
      <div className="info-wrapper">
        <h3>{director}</h3>
        <p>{year}</p>
      </div>
      <p>{duration}</p>
      <div className="genres-wrapper">
        {genre.map((elt, index) => (
          <p key={index}>{elt}</p>
        ))}
      </div>
      <h3>{rate}</h3>
    </article>
  );
};

export default MovieItem;
