import React from "react";

function SearchBox(props) {
  const { searchInput, searchHandler } = props;

  return (
    <input
      id="search-box"
      className="search-box"
      type="text"
      placeholder="Search"
      value={searchInput}
      onChange={searchHandler}
    />
  );
}

export default SearchBox;
