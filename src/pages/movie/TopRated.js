import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovies } from "../../features/moviesSlice";

function TopRatedMovie() {
    // menyimpan Api Key dan url
    const API_KEY = process.env.REACT_APP_API__KEY;
    // eslint-disable-next-line no-unused-vars
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    async function getTopRatedMovies() {
        const response = await axios (ENDPOINTS.TOPRATED);
        dispatch(updateMovies(response.data.results));
    }

    return (
        <>
            <Hero />
            <Movies title="Top Rated" />
        </>
    )
}

export default TopRatedMovie;