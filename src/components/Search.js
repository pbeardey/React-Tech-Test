// src/__tests__/Search.test.js
import React, {useState} from "react";
import "../styles/search.css";
import "../requests/getImages";
import getImages from "../requests/getImages";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(searchText);
  }

  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-form__input" onChange={handleInputChange}></input>
        <button className="search-form__button" type="submit">Go!</button>
      </form>
  )
}

export default Search;