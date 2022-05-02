const API = "https://swapi.dev/api";

const HTMLResponse = document.querySelector('#app');

fetch(`${API}/films`)
.then(response => response.json())
.then(peliculas =>{
    const tpl = peliculas.results.map(pelicula => `<tr><td>${pelicula.title}</td><td>${pelicula.episode_id}</td><td>${pelicula.director}</td><td>${pelicula.producer}</td></tr>`);
    HTMLResponse.innerHTML += tpl;
})
.catch(err =>{
    console.log(err)
})