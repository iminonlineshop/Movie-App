// Import Create
import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/data";

/**
 * Membuat slice untuk generation action dan reducer.
 * Menerima params object name, initialState, reducers
 */

const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data,
    },
    reducers: {
        addMovie(state, action) {
            // addmovie to movies
            state.movies.push(action.payload);
        },
        //Membuat reducer untuk updateMovies
        updateMovies(state, action) {
            state.movies = action.payload;
        }
    },
});

// Generatio action dan reducers
const moviesReducer = moviesSlice.reducer;
const {addMovie, updateMovies} = moviesSlice.actions;

// Export action dan reducers
export default moviesReducer;
export {
    addMovie,
    updateMovies
};