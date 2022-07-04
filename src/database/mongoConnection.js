const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/basedata";

function connectToDatabase() {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado com o MongoDB"))
    .catch((error) =>
      console.log("Erro ao conectar ao MongoDB, erro: ", error)
    );
}

module.exports = connectToDatabase;
