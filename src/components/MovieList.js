import React, {useState, useEffect} from 'react'
import axios from '../axios-Requests/axios'
import "./CSS/MovieList.css"

 const imgURL = 'https://image.tmdb.org/t/p/original'
//Curly Braces are used to destructurize our objects (acccesing multiple properties stored in obj & arrays)
export default function MovieList({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
            // setMovies(request.data.results);
        }
        fetchData();
    }, [fetchUrl]);


    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='movie-posters'>
                {movies.map(
                    (movie) => (<img key = {movie.id} className="movie-poster" src={`${imgURL}${movie.poster_path}`} alt="movie-poster-here" />)
                )}
            </div>
        </div>
    )
}
