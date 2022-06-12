// src/components/App.js

import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const LOGO_URL="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
  const  [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img className="nasa-logo" alt="NASA logo" src={LOGO_URL}/> 
      <Search setSearchResults={setSearchResults}/> 
      <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;
