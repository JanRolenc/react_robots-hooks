import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <input onChange={searchChange}
            placeholder="search robots"
            type="search"
            style={{ padding: "5px", margin: "20px", fontSize: "15px", width: "200px" }}
        />
    );
}
export default SearchBox;