import AppDispatcher from './AppDispatcher.js';
import AppConstants from './AppConstants.js';


export function inputSearchMovieChanged(value){
    AppDispatcher.handleViewAction({
        type: AppConstants.INPUT_SEARCH_MOVIES_CHANGED,
        value: value
    });
}

export function searchMovies(){
    AppDispatcher.handleViewAction({
        type: AppConstants.SEARCH_MOVIES
    });
}

export function receiveMovieResults(movies){
    console.log("Action Recibida <<<<<<<<");
    AppDispatcher.handleViewAction({
        type: AppConstants.RECEIVED_MOVIES_RESULTS,
        movies: movies
    });
}