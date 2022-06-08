// src/requests/getImages.js

import axios from "axios";

const getImages = (query) => {
   const API_ENDPOINT="https://images-api.nasa.gov/search?q=";
  
  if(!query) {
    return Promise.resolve([]);
  }
  else {
    return axios
      .get(API_ENDPOINT+query)
      .then((response)=>{
        console.log(response);
      }
      )
      .catch((err) => {
        console.log(err);
      })
  }

}

export default getImages;