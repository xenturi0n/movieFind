import * as AppActions from './AppActions.js';
import 'whatwg-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response){
    return response.json();
}

export function searchMovies(movie){
    const url = `http://www.omdbapi.com/?s=${movie.title}&type=movie`;

    fetch(url)
    .then(checkStatus)
    .then(parseJSON)
    .then((json)=>{
        console.log(json.Search);
        AppActions.receiveMovieResults(json.Search);
    })
    .catch(err=>console.log('Requst failed', error));
}

window.searchMovies = searchMovies;