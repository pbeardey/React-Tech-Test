// src/requests/SearchResults.js

import React from "react";
import PropTypes from "prop-types";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  
  if(!results.length) {
    return (
      <div className="search-results__header">
        <h2>No results</h2>
      </div>
    )
  }
  else {
    return (
      <>
      <div className="search-results__header">
        <h2>Search Results</h2>
      </div>
      <div className="search-results__wrapper">
        {results.map((image) => <img
          key={image.nasaId}
          className="card-image"
          src={image.href}
          alt={image.description} />)};
      </div>
      </>
    )
  }
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      nasaId: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  )
}

export default SearchResults; 