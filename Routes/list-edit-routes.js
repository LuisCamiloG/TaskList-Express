const express = require("express");
const router = express.Router();
const data = require("../Data/datos.json");
const fs = require("fs");

router.post("/guardar", express.json(), (req, res) => {
  const datos = req.body;
  data.push(datos);
  fs.writeFileSync("./Data/datos.json", JSON.stringify(data));
  res.send("Recibido correctamente!");
  res.end();
});

module.exports = router;
