const express = require("express");
const update = express.Router();
const fs = require("fs");

update.put("/:id", express.json(), (req, res) => {
  const datos = JSON.parse(fs.readFileSync("./Data/datos.json", "utf-8"));
  const { id } = req.params;
  datos.map((tareas) => {
    if (tareas.id == id) {
      tareas.descripcion = req.body.descripcion;
      tareas.estado = req.body.estado;
    }
  });
  fs.writeFileSync("./Data/datos.json", JSON.stringify(datos));
  res.json({ message: `Tarea con el id: ${id} actualizada correctamente!` });
  res.send();
});

module.exports = update;
