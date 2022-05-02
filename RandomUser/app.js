const API = "https://randomuser.me/api/";

const HTMLResponse = document.querySelector('#app');

fetch(API)
.then(response => response.json())
.then(usuarios =>{
    const tpl = usuarios.results.map(usuario => `<tr>
                                                    <td>${usuario.name.title} ${usuario.name.first} ${usuario.name.last}</td>
                                                    <td>${usuario.gender}</td>
                                                    <td>${usuario.location.city} - ${usuario.location.country} - ${usuario.location.street.name} ${usuario.location.street.number}</td>
                                                    <td>${usuario.email}</td>
                                                    <td>${usuario.phone}</td>
                                                    <td><img src="${usuario.picture.large}"></img></td>
                                                </tr>`);
    HTMLResponse.innerHTML += tpl;
})
.catch(err =>{
    console.log(err)
})