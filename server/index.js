const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



// Constantes importantes
const distDir = "../dist/";
const uri = "mongodb+srv://OneLife:Crazouli971@onelife.caw0b.mongodb.net/NGBdd?retryWrites=true&w=majority";
const User = require("./model/user.model");



// Déclaration d'instance et connexion BdD
const app = express();
var promise = mongoose.connect(uri, {
  userNewUrlParser: true
});

promise.then(() => {
  console.log("DB Connected");
  app.listen("3000", () => {
    console.log("Server started and Listening on port 3000 !!!");
  });
});



// Configuration
app.use(express.static(path.join(__dirname, distDir)));
app.use(/^((?!(api)).)*/, (req, res) => {
  res.sendFile(path.join(__dirname, distDir + "/index.html"));
});

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());