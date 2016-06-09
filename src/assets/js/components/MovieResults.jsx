import React from 'react';

function renderMovies(movies){
    return movies.sort((a, b)=>b.Year - a.Year).map((movie)=>{
        return (
            <div key={movie.imdbID} className="well">
                <div className="media">
                    <div className="media-left media-middle">
                        <a href="#">
                            <img src={movie.Poster} alt="Poster" className="media-object" style={{width: '100px'}}/>
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="well">
                            <h4 className="media-heading">{movie.Title}</h4>
                            <ul className="list-group">
                                <li className="list-group-item">Year: {movie.Year}</li>
                                <li className="list-group-item">imdbID: {movie.imdbID}</li>
                            </ul>
                            <a href={`http://www.imdb.com/title/${movie.imdbID}/?ref_=fn_al_tt_1`} className="btn btn-primary">View in imDB</a>
                        </div>                        
                    </div>
                </div>
                {movie.Title}
            </div>
        );
    });
}

const MovieResults = (props)=> {
    let movs= renderMovies(props.movies)
    console.log(movs);
   return(
       <div>
           {movs}
       </div>        
   );
}

export default MovieResults;