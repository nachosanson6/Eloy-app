
const express = require("express");


const logger = require("morgan");


const cookieParser = require("cookie-parser");


const cors = require("cors");

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:5173";


module.exports = (app) => {

  app.set("trust proxy", 1);


  app.use(
    cors({
      origin: [FRONTEND_URL],
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE", 
      credentials: true, 
    })
  );

  app.options('*', cors()); // Habilitar el método OPTIONS para las solicitudes CORS


  app.use(logger("dev"));


  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
