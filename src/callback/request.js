let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

// fetch es una implementación que está disponible desde es6 en adelante

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  // En el tercer parámetro le decimos si va a ser una petición
  // asíncrona, por defecto está en true, así que podemos o no 
  // pasarlo.
  xhttp.open('GET', url_api, true);
  // onreadystatechange si este cambio sucede se ejecuta una función.
  xhttp.onreadystatechange = function(event) {
    // El estado 4 es cuando ya se ha completado la petición
    if(xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        // El primer parámetro es el error, nuestra respuesta viene en texto 
        // es muy poco legible y para eso ocupamos JSON.parse()
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('Error ' + url_api);
        return callback(error, null);
      }
    }
  }
  xhttp.send();
}

fetchData(API, function(error1, data1) {
  if(error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function(error2, data2) {
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, function(error3, data3) {
      if(error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  })
})