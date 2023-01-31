const ValidacionPost = (req, res, next) => {
  const { body, method } = req;
  if (method == "POST") {
    if (Object.keys(body).length === 0)
      return res.status(400).json({
        msg: " Datos invalidos",
      });
    next();
  }
  next();
};

const validacionPut = (req, res, next) => {
    const {body, method} = req;
    if (method == "PUT") {
      if (Object.keys(body).length === 0)
      return res.status(400).json({
        msg: "El cuerpo del mensaje esta vacio"
      })
    }
        
};

const requestValid = () => {
  const { method } = req;
  const arrMethod = ["POST", "GET", "PUT", "DELETE"];
  const valid = arrMethod.some((http) => http === method);
  if (!valid)
    return res.status(400).json({
      msg: "Metodo http invalido",
    });

  next();
};

const validUrl = (req, res, next) => {
  let url = req.originalUrl;
  const arrayUrl = url.split("/");
  const valid = arrayUrl.some((url) => url == "app");
  console.log(valid);
  const urlValidated = ["app", "/"];
  const validate = urlValidated.some((value) => value === url);
  console.log(validate);
  if (!valid) {
    return res.status(401).json({
      msg: "No tienes autorización para esto",
    });
  }
  if (arrayUrl.length === 2) {
    if (arrayUrl[2] === "")
      return res.status(401).json({
        msg: "No tienes autorización para esto",
      });
    next();
  }
  next();
};

module.exports = { 
  ValidacionPost, 
  validacionPut,
  requestValid,
  validUrl
};
