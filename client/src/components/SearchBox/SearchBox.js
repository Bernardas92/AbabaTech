import React from "react";

const SearchBox = (props) => {
    return (
        <div className="col col-sm-8 " >
            <input 
                className="form-control" 
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Ieškoti filmo'
            ></input>
        </div>
    )
}

export default SearchBox