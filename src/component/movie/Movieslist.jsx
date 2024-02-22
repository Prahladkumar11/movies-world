import React from 'react'
import './Movieslist.css'

function Movieslist({props}) {
  return (
    <div className="row">
          {props.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
            </div>
          ))}
    </div>
  )
}

export default Movieslist