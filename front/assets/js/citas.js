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
