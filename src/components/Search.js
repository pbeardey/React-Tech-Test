// src/__tests__/Search.test.js
import React, {useState} from "react";
import PropTypes from "prop-types";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ( {setSearchResults} ) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(searchText));
  }

  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-form__input" onChange={handleInputChange}></input>
        <button className="search-form__button" type="submit">Go!</button>
      </form>
  )
}

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
}

export default Search;