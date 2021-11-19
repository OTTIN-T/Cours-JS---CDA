require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const userRouter = require("./routes/user");

app.use((req, res, next) => {
  //On ajoute des headers à notre objet response
  res.setHeader("Access-Control-Allow-Origin", "*"); //Permet d'accéder à notre API depuis n'importe quelle origine (*)
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  ); //Permet d'ajouter les headers mentionnés aux requêtes envoyées vers notre API
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  ); //Permet d'envoyer des requêtes avec les méthodes mentionnées
  next();
});

app.use("/users", userRouter);

app.listen(port, () => {
  console.log("Server running");
});

module.exports = app;
