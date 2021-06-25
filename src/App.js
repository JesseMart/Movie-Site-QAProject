import React from 'react'
import MovieList from './components/MovieList'
import './App.css';
import requests from './axios-Requests/requests';

function App() {
  return (
    <div className="App">
      <MovieList title = "Trending" fetchUrl={requests.getTrending} />
      <MovieList title = "Popular TV Shows" fetchUrl={requests.getTVShows} />
      <MovieList title = "Now Playing" fetchUrl={requests.getNPMovies} />
      <MovieList title = "Popular Films" fetchUrl={requests.getPopularMovies} />
      <MovieList title = "Horror Films" fetchUrl={requests.getHorror} />
      <MovieList title = "Action Films" fetchUrl={requests.getAction} />
    </div>
  );
}

export default App;
