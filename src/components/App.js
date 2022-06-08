// src/components/App.js

import React from "react";
import '../styles/app.css';
import Search from "./Search";

const App = () => {
  return (
    <div className="App">
        <img className="nasa-logo" alt="NASA logo" src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"/>
        <Search />
    </div>
  );
}

export default App;
