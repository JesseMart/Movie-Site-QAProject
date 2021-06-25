import React, {useState, useEffect} from 'react'
import axios from '../axios-Requests/axios'
import "./CSS/MovieList.css"

import YouTube from 'react-youtube'

 const imgURL = 'https://image.tmdb.org/t/p/original'
//Curly Braces are used to destructurize our objects (acccesing multiple properties stored in obj & arrays)
export default function MovieList({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);
    const [trailerPath, setTrailerPath] = useState("")


    const options = {
        height: "375",
        width: "100%",
        playerVars: {
            autplay: 1,
        }
    };

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

    const handleClick = async (movie) => {
        if( trailerPath) {
            setTrailerPath("")
        }else {
            let trailerPath = await axios.get( `movie/${movie.id}/videos?api_key=f9a6f7630ab9132d6817fef439aebb3b`)
            setTrailerPath(trailerPath.data.results[0]?.key);
        }
    };
    
    

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='movie-posters'>
                {movies.map(
                    (movie) => (<img key = {movie.id} onClick ={()=>handleClick(movie)} className="movie-poster" src={`${imgURL}${movie.poster_path}`} alt="movie-poster-here" />)
                )}
            </div>
            {trailerPath && <YouTube videoId={trailerPath} options={options}/>}
        </div>
    )
}
