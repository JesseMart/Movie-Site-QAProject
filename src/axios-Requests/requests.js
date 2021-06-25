const API__KEY = 'f9a6f7630ab9132d6817fef439aebb3b';

const requests = {
    getTrending = `/treding/all/day?api_key=${API__KEY}&language=en-US`,
    getTVShows = `/discover/tv?api_key=$${API__KEY}&with_networks=213`,
}

export default requests