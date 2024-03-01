import React from 'react';
import './Movieslist.css';
import 'boxicons';
import noImage from '../../asset/no-image.png';

function Movieslist({ props, like, handleLike }) {
  const handleImageError = (event) => {
    event.target.src = noImage;
  };

  return (
    <div className="row">
      {props.map((movie) => (
        <div key={movie.imdbID} className="movie">
          <img
            src={movie.Poster}
            alt={movie.Title}
            onError={handleImageError}
          />
          <h3>
            {movie.Title}
            {like.hasOwnProperty(movie.imdbID) ? (
              <i
                className='bx bxs-heart bx-border bx-tada-hover liked'
                onClick={() => handleLike(movie.imdbID)}
              ></i>
            ) : (
              <i
                className='bx bxs-heart bx-tada-hover bx-border-circle'
                onClick={() => handleLike(movie.imdbID)}
              ></i>
            )}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default Movieslist;
