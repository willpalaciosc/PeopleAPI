const API = "https://jsonplaceholder.typicode.com/users";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};

const llenarDatos = (data) => {
  let html = "";

  data.forEach((pj) => {

   html += '<div class="card" style="width: 18rem;">';
   html += '<ul class="list-group list-group-flush">';
   html += `<li class="list-group-item">${pj.name}</li>`;
   html += `<li class="list-group-item">${pj.email}</li>`;
   html += `<li class="list-group-item">${pj.address.city}</li>`
   html += '</ul>'
   html += '</div>'
  });

  document.getElementById("datosPeople").innerHTML = html;
};

getData(API);