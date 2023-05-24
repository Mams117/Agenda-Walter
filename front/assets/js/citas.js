const { json } = require("express");

//variables de entorno
const urlApi = "http://localhost:4000/";

//DOM Login

const FechaCita = document.querySelector("#FechaCita");
const Descripcion = document.querySelector("#Descripcion");
const btnenviar = document.querySelector("#btnenviar");

btnenviar.addEventListener("click", (e) => {
  e.preventDefault(); //previene el reenvio del formulario
  fetch(urlApi + "cita", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Fecha: FechaCita.value,
      Descripcion: Descripcion.value,
    }),
  })
    .then((res) => {
      return res.text();
    })
    .then((res) => {
      console.log(res);
      if (res === "true") {
        window.location = "http://127.0.0.1:5501/front/citas.html";
      } else {
        console.log(res);
      }
    });
});
const table = document.querySelector("#table");
const th1 = document.querySelector("#th1");
const th2 = document.querySelector("#th2");
const th3 = document.querySelector("#th3");

fetch(urlApi + "cita").then((respuesta) => {
  return respuesta.json();
});
then((respuesta) => {
  for (let index = 0; index < respuesta.length; index++) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td.innerHTML = respuesta.Id;

    tr.appendChild(td);
    tr1.appendChild(td);
    tr2.appendChild(td);
    tr3.appendChild(td);
  }
});
