// src/components/Search.js
import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = () => {
  const [searchText, setSearchText] = useState("")
 
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(searchText);
  }

  return (
    <div className="search">
    <form className="search-form" onSubmit={handleSubmit}>
      <input className="search-input" type="text" onChange={handleInputChange}></input>  
      <button className="search-button" type="submit">Go!</button>
    </form>
    </div>
  )
}

export default Search;