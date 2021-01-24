import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  //비동기  async, await for what? axios
  getMovies = async () => {
    const { 
      data: {
        data: { movies }
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
      this.setState({ movies, isLoading: false });
    console.log("movies: ", movies);
  }
  componentDidMount() {
    this.getMovies(); 
  }
  render() {
    const { isLoading, movies } = this.state; //state 데이터를 객체로 = this.state
    return (
      <div className="container">
        { isLoading ? ( //3항 연산자
        <div className="loader-container">
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          </div>
        ) : (
            <div className="movies">
              {movies.map((movie) => (
                <Movie //Movie.js
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                largePoster={movie.large_cover_image}
                genres={movie.genres}
                rating={movie.rating}
                />
              ))
              }
            </div>
        )}  
      </div>
    )
  }
}

export default Home;
