import React, { useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import ResultCard from './ResultCard';

export default function Add() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])

    function onChange(e) {
        e.preventDefault();
        setQuery(e.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4cdd8dd4c05547eb7eb974626df7ffa0&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data.results)
                } else {
                    setResults([])
                }
            })
    }


    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <img src='https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg' alt='foto' />
                    <div className='titles'>
                        <h1>Welcome!</h1>
                        <h2>Millions of movies, series and TV shows are here. Discover now.</h2>
                    </div>
                    <div className='input-wrapper'>
                        <input
                            type='text'
                            value={query}
                            onChange={onChange}
                            placeholder='Film, serial axtar ...' />
                    </div>

                    {results.length > 0 && (
                        <ul className='results'>
                            {results.map((movie) => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
