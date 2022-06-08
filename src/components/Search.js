/* eslint-disable no-unused-vars */
// src/components/Search.js
import React, { useState } from "react";
import "../styles/search.css";

const Search = () => {
  const [searchText, setSearchText] = useState()
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <>
    <form className="search-form">
      <input className="search-input" type="text" onChange={handleInputChange}></input>  
      <button className="search-button" type="submit">Go!</button>
    </form>
    </>
  )
}

export default Search;