const express = require("express");
const cors = require("cors"); // para evitar restricciones entre llamadas de sitios
const usuario = express.Router(); // trae el metodo router de express para hacer los endpoint  http://www.misitio.com/api/clients
const conex = require("./bdatos");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { promisify } = require("util"); //la trae por defecto NODE.JS me permite usar async/await opcion a fetch
const { error } = require("console");
const { PassThrough } = require("stream");
//const url_permitida = "http://127.0.0.1:5500"; //evitar el error de politicas de cors

//middlewares requeridos
//middlewares: logica de intercambio entre las aplicaciones, traductor de datos entre aplicaciones distribuidas
usuario.use(express.json()); //serializa la data en JSON
usuario.use(cors());
usuario.options("*", cors());


//1.Traemos los datos del usuario
usuario.get("/usuario", async (req, res) => {
    try {
      conex.query(
        "select Id,Nombre,Apellido,Email from usuario",
        (error, respuesta) => {
          console.log(respuesta);
          res.send(respuesta);
        }
      );
    } catch (error) {
      console.log(error);
    }
  });