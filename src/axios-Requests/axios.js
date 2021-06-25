import axios from 'axios'

const axiosCreate = axios.create( {
    bUrl : "https://api.themoviedb.org/3",
})

export default axiosCreate;


