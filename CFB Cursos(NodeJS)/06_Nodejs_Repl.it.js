const express = require("express");
const app = express();
const porta = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Treinando com o node, o write não funciona")
})

app.listen(porta || 3000, () => {
    console.log("Servidor Rodando !")
})