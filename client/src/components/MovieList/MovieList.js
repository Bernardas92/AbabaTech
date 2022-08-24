import React from "react";

const MovieList = (props) => {
    return (
        <>
        {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start mt-3 mb-3">
            <img src={movie.Poster} alt='movie'></img>
            <div className="title">
            {movie.Title}
            </div>

            <div className="Year">
            {movie.Year}
            </div>
        </div>
        ))}
        </>
    );
};

export default MovieList