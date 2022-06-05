import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export default function ResultCard({ movie }) {
    const {watchlist, watched, addMovieToWatchlist, addMovieToWatched} = useContext(GlobalContext);

    const storeMovieWatched = watched.find((e) => e.id === movie.id);
    const storeMovie = watchlist.find((e) => e.id === movie.id) 
    ? true
    : !!storeMovieWatched;
  return (
    <div className='result-card'>
        <div className='poster-wrapper'>
            {movie.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={`${movie.poster_path}`}/>
            ) : (
                <div className='filler-poster'></div>
            )}
        </div>

        <div className='info'>
            <div className='header'>
                <h3 className='title'>{movie.title}</h3>
                <h4 className='release-date'>
                    {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
                </h4>
                <h4 className='release-date'>
                    IMDB: <b>{movie.vote_average ? movie.vote_average : '-'}</b>
                </h4>
            </div>
            <div className='controls'>
                <button 
                className='btn'
                disabled = {storeMovie}
                onClick={() => addMovieToWatchlist(movie)}
                >
                    Add to Watchlist
                </button>

                <button 
                className='btn'
                disabled = {storeMovieWatched}
                onClick={() => addMovieToWatched(movie)}
                >
                    Add to Watched
                </button>
            </div>
        </div>
    </div>
  )
}
