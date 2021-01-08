import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) { //파라미터 : 객체로 가져와야한다.
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data"> 
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">{genres.map((genre, index) => <li key={index}className="genres__genre">{genre}</li>)}</ul>
        <p className="movie__summary">{summary.slice(0, 150)}...</p> {/** summary를 0~140까지만 출력 후 ...로 처리 */}
      </div>
    </div>
  )
}

Movie.prototypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;