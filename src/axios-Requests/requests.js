const API__KEY = 'f9a6f7630ab9132d6817fef439aebb3b';

const requests = {
    getTrending : `/trending/all/day?api_key=${API__KEY}&language=en-US`,
    getTVShows : `/discover/tv?api_key=${API__KEY}&with_networks=213`,
    getNPMovies : `/movie/now_playing?api_key=${API__KEY}&language=en-US`,
    getPopularMovies : `/movie/popular?api_key=${API__KEY}&language=en-US`,
    getHorror : `/discover/movie?api_key=${API__KEY}&with_genres=27`,
    getAction :`/discover/movie?api_key=${API__KEY}&with_genres=28`,
}

export default requests