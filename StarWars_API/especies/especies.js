const API = "https://swapi.dev/api";

const HTMLResponse = document.querySelector('#app');

fetch(`${API}/species`)
.then(response => response.json())
.then(especies =>{
    const tpl = especies.results.map(especie => `<tr><td>${especie.name}</td><td>${especie.average_height} cm</td><td>${especie.language}</td></tr>`);
    HTMLResponse.innerHTML += tpl;
})
.catch(err =>{
    console.log(err)
})