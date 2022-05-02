const API = "https://swapi.dev/api";

const HTMLResponse = document.querySelector('#app');

fetch(`${API}/vehicles`)
.then(response => response.json())
.then(vehiculos =>{
    const tpl = vehiculos.results.map(vehiculo => `<tr><td>${vehiculo.name}</td><td>${vehiculo.model}</td><td>${vehiculo.cost_in_credits}</td></tr>`);
    HTMLResponse.innerHTML += tpl;
})
.catch(err =>{
    console.log(err)
})