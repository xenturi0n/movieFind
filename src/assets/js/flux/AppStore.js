import AppDispatcher from './AppDispatcher.js';
import AppConstants from './AppConstants.js';
import * as AppAPI from './appAPI.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change'

class AppStore extends EventEmitter{
    constructor(){
        super();
        this._state={
            movies: [],
            selected: '',
            inputSearchText: '',
            fetchingMovies: false
        }
    }

    getState(){
        return this._state;
    }

    handleActions(payload){
        let action = payload.action;

        switch(action.type){

            case AppConstants.INPUT_SEARCH_MOVIES_CHANGED:
                this._state.inputSearchText=action.value;
                this.emit(CHANGE_EVENT);
            break;

            case AppConstants.SEARCH_MOVIES:
                this._state.fetchingMovies=true;
                this.emit(CHANGE_EVENT);
                AppAPI.searchMovies({title: this._state.inputSearchText.trim()});                
            break;

            case AppConstants.RECEIVED_MOVIES_RESULTS:
                console.log("Sotore RECEIVED_MOVIES_RESULTS", action.movies);
                this._state.fetchingMovies=false;
                this._state.movies=action.movies;
                this.emit(CHANGE_EVENT);
                break;
        }
    }
}

const appStore = new AppStore;
AppDispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;