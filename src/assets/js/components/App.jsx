import React, {Component, PropTypes} from 'react';

import * as AppActions from '../flux/AppActions.js';
import AppStore from '../flux/AppStore.js';

import SearchForm from './SearchForm.jsx';
import MovieResults from './MovieResults.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = AppStore.getState();
    }

    componentWillMount(){
        AppStore.on('change', this._handleStoreChange.bind(this));
    }
    componentWillUnmount(){
        AppStore.removeListener('change', this._handleStoreChange.bind(this));
    }

    _handleStoreChange(){
        console.log("store CHanged");
        this.setState(AppStore.getState())
    }

    render(){
        const value = this.state.inputSearchText || '';
        console.log(this.state.movies);
        return(
            <div>
                <SearchForm value={value}></SearchForm>
                
                <MovieResults movies={this.state.movies}/>
            </div>
        );

    }
}

export default App;