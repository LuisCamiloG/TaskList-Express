const express = require("express");
const eliminar = express.Router();
const fs = require("fs");

eliminar.delete("/:id", (req, res) => {
  const datos = JSON.parse(fs.readFileSync("./Data/datos.json", "utf-8"));
  const { id } = req.params;
  const borrar = datos.filter((tarea) => tarea.id != id);
  fs.writeFileSync("./Data/datos.json", JSON.stringify(borrar));
  res.json({ message: `Id = ${id} eliminado correctamente` });
  res.end();
});

module.exports = eliminar;
