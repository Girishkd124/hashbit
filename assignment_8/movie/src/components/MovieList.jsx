import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const movies = [
  { id: 1, title: 'Kill', imgSrc: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kill-et00374797-1718179453.jpg' },
  { id: 2, title: 'Munjya', imgSrc: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/munjya-et00398936-1716358299.jpg' },
  { id: 3, title: 'Deadpool & Wolverine', imgSrc: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/deadpool-and-wolverine-et00341295-1718018322.jpg' },
  { id: 4, title: 'Kalki 2898 AD', imgSrc: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg' },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img src={movie.imgSrc} alt={movie.title} />
          <h3>{movie.title}</h3>
          <Link to={`/details/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;