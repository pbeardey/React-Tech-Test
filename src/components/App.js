// src/components/App.js

import React, { useState } from "react";
import '../styles/app.css';
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
        <img className="nasa-logo" alt="NASA logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"/>
        <Search setSearchResults={setSearchResults}/>
        <SearchResults searchResults={searchResults}/>
    </div>
  );
}

export default App;
