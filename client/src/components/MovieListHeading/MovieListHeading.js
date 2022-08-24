import React from "react";

const MovieListHeading = (props) => {
    return (
        <div className="col-md-8">
            <h1 className="col mt-2 mb-4">{props.heading}</h1>
        </div>
    )
}

export default MovieListHeading