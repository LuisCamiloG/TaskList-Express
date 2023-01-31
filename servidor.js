const guardar = require("./Routes/list-edit-routes");
const incompletas = require("./Routes/list-view-router");
const completadas = require("./Routes/list-view-router");
const eliminar = require("./Routes/list-delete-router");
const actualizar = require("./Routes/list-update-router");
const express = require("express");
const { ValidacionPost, validacionPut, requestValid, validUrl } = require("./Middleware/middleware");
const app = express();
const port = 8090;

//middleware
app.use(express.json());
app.use(ValidacionPost);
app.use(validacionPut);
app.use(requestValid)
app.use(validUrl)

app.use("/", incompletas);
app.use("/", completadas);
app.use("/", guardar);
app.use("/", eliminar);
app.use("/", actualizar);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: http://localhost:${port}`);
});

module.exports = app;
