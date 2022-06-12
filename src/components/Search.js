// src/__tests__/Search.test.js
import React from "react";
import "../styles/search.css";

const Search = () => {

  return (
      <form className="search-form">
        <input className="search-form__input"></input>
        <button className="search-form__button" type="submit">Go!</button>
      </form>
  )
}

export default Search;