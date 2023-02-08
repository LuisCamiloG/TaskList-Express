const express = require("express");
const router = require("./Routes/routes");
const app = express();
const port = 8000;
const host = "localhost";
const {
  validUrl,
  requestValid,
  validacionPost,
} = require("./Middleware/middleware");
const login = require("./login");

//set
app.set("view engine", "ejs");

//middleware

// app.use("/recursos", express.static(__dirname + "/public"));
app.use(express.json());
app.use(requestValid);
app.use(validUrl);
app.use(validacionPost);
//Route
app.use("/app", login);
app.use("/app", router);
app.get("/", (req, res) => {
  res.render("index");
});

//Server
app.listen(8000, () => console.log(` servidor en http://${host}:${port}`));
