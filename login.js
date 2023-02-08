const express = require("express");
const login = express.Router();
const db = require("./Data/datos.json");
const jwt = require("jsonwebtoken");
require("dotenv").config();

login.post("/auth", function (req, res) {
  const userInfo = db.map((tarea) => {
    if (tarea.idUser == req.body.idUser) {
      return tarea;
    }
  });
  if (userInfo.length === 0) {
    res.status(401).send({ error: "Invalid user name or password" });
  } else {
    const token = jwt.sign(userInfo[0], process.env.SECRET_KEY);

    res.json({ token });
  }
});

login.get("/protect", function (req, res) {
  const token = req.header("Authorization");
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    res.send("Autenticado");
  } catch (e) {
    res.json({ e });
  }
});

module.exports = login;
