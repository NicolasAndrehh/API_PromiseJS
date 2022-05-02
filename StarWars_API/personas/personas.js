const API = "https://swapi.dev/api";

const HTMLResponse = document.querySelector('#app');

fetch(`${API}/people`)
.then(response => response.json())
.then(personas =>{
    const tpl = personas.results.map(persona => `<tr><td>${persona.name}</td><td>${persona.height}</td><td>${persona.mass}</td><td>${persona.gender}</td></tr>`);
    HTMLResponse.innerHTML += tpl;
})
.catch(err =>{
    console.log(err)
})