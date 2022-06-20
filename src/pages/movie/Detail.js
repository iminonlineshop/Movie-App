import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { updateMovies } from "../../features/moviesSlice";

function Detail() {
    const { id } = useParams();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const dispatch = useDispatch();
 
    useEffect(() => {
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    async function getRecommendationMovies() {
        // eslint-disable-next-line no-unused-vars
        const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(ENDPOINTS.RECOMENDATIONS(id));
        dispatch(updateMovies(response.data.results));
    }
    
    return(
        <>
            <DetailMovie />
            <Movies title="Recommendation Movies" />
        </>
    );
}

export default Detail;