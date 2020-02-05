const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then(data => {
    console.log(data.info.count); // => 493
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then(data => {
    console.log(data.name); // => Rick Sanchez
    return fetchData(data.origin.url);
  })
  .then(data => {
    console.log(data.dimension); // => Dimension C-137
  })
  .catch(err => {
    console.log(err);
  })