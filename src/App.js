import React from 'react'
import MovieList from './components/MovieList'
import './App.css';
import requests from './axios-Requests/requests';
import NavBar from './components/NavBar';
import MovieSample from './components/MovieSample'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieSample />
      <MovieList title = "Trending Films" fetchUrl={requests.getTrending} />
      <MovieList title = "Now Playing" fetchUrl={requests.getNPMovies} />
      
      <MovieList title = "Popular Films Today" fetchUrl={requests.getPopularMovies} />
      <MovieList title = "TV Based Films" fetchUrl={requests.getTVMovies} />
      <MovieList title = "Horror Films" fetchUrl={requests.getHorror} />
      <MovieList title = "Action Films" fetchUrl={requests.getAction} />
    </div>
  );
}

export default App;
