import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';

export default function Watched() {
  const { watched } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'> Movies Watched </h1>

          <div className='count-pill'>
            {watched.length} {watched.length < 2 ? "Movie" : "Movies"}
          </div>
        </div>

        {watched.length > 0 ? (
          <div className='movie-grid'>
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'> No movies on your list...</h2>
        )}
      </div>
    </div>
  )
}