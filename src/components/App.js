// src/components/App.js

import React from "react";
import "../styles/app.css";
import Search from "./Search";

const App = () => {
  const LOGO_URL="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"

  return (
    <div className="App">
      <img className="nasa-logo" alt="NASA logo" src={LOGO_URL}/> 
      <Search /> 
    </div>
  );
}

export default App;
