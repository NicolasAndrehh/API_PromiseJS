const API = "https://swapi.dev/api";

const HTMLResponse = document.querySelector('#app');

fetch(`${API}/planets`)
.then(response => response.json())
.then(planetas =>{
    const tpl = planetas.results.map(planeta => `<tr><td>${planeta.name}</td><td>${planeta.climate}</td><td>${planeta.terrain}</td><td>${planeta.population}</td></tr>`);
    HTMLResponse.innerHTML += tpl;
})
.catch(err =>{
    console.log(err)
})