import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovies } from "../../features/moviesSlice";


function PopularMovie() {
    // Menyimpan API KEY dan URL
    const API_KEY = process.env.REACT_APP_API_KEY;
    // eslint-disable-next-line no-unused-vars
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    const dispatch = useDispatch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        getTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getTrendingMovies() {
        // Fetch data dari axios
        const response = await axios(ENDPOINTS.POPULAR);
        dispatch(updateMovies(response.data.results));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }

    return (
        <>
            <Hero />
            <Movies title="Popular Movies" />
        </>
    )
}

export default PopularMovie;