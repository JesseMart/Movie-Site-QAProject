import React, { useEffect, useState} from 'react'
import axios from '../axios-Requests/axios'
import requests from '../axios-Requests/requests'

import './CSS/MovieSample.css'

function MovieSample() {
const [movie, setMovie] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.getTPMovies);
            console.log(request);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, [])

    return (
        <header className='header-container' style={{
            backgroundSize : "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundPosition : "center center"
            }}>
            <div className = "header-contents">
                <h1 className="movie-title">
                   
                   {movie?.title || movie?.name || movie?.original_name }
                </h1>
                <h1 className="movie-desc">
                    {movie?.overview}
                </h1>
            </div>
            <div className="header--fadeBottom" />
        </header>
    )
}

export default MovieSample
