import React from 'react';
import * as AppActions from '../flux/AppActions.js';
import AppStore from '../flux/AppStore.js';

function formOnSubmit(e){
    e.preventDefault();
    AppActions.searchMovies();
}

function inputSearchOnChange(e){
    e.preventDefault();
    AppActions.inputSearchMovieChanged(e.target.value)
}

const SearchForm = (props) =>{
    return(
        <div className="search-form well">
            <h1 className="text-center">Search For a Movie</h1>
            <form action="" onSubmit={formOnSubmit.bind(this)}>
                <div className="form-group">
                    <input type="text" 
                           className="form-control"
                           placeholder="Enter a Movie Title..."
                           value={props.value}
                           onChange={inputSearchOnChange.bind(this)}/>                   
                </div>
                <button className="btn btn-primary btn-block">Search Movies</button>
            </form>
        </div>
    );
}

export default SearchForm;