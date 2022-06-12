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
        const imageResults = response.data.collection.items;
        const parsedResults = imageResults.filter((e) => {return e.data[0].media_type==="image"})
        const images = parsedResults.map((e) => {return {
          nasaId: e.data[0].nasa_id,
          href: e.links[0].href,
          description: e.data[0].description
        }});
        return images;
      }
      )
      .catch((err) => {
        console.log(err);
      })
  }

}

export default getImages;