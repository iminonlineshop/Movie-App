const API_KEY = process.env.REACT_APP_API_KEY;
const https = "https://api.themoviedb.org/3";

const ENDPOINTS = {
    HOME: `${https}/movie/home?api_key=${API_KEY}`,
    POPULAR: `${https}/movie/popular?api_key=${API_KEY}`,
    NOWPLAYING: `${https}/movie/now_playing?api_key=${API_KEY}`,
    TOPRATED: `${https}/movie/top_rated?api_key=${API_KEY}`,
    DETAIL(id) {
        return `{https}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    },
    RECOMENDATIONS(id) {
        return `{https}/movie/${id}/recommendations?api_key=${API_KEY}`;
    },
};

export default ENDPOINTS;