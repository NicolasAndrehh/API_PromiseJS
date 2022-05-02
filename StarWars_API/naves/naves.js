const API = "https://swapi.dev/api";

const HTMLResponse = document.querySelector('#app');

fetch(`${API}/starships`)
.then(response => response.json())
.then(naves =>{
    const tpl = naves.results.map(nave => `<tr><td>${nave.name}</td><td>${nave.model}</td><td>${nave.cost_in_credits}</td></tr>`);
    HTMLResponse.innerHTML += tpl;
})
.catch(err =>{
    console.log(err)
})