const express = require("express");
const rotas = require("./Rotas/rotas");
const porta = process.env.PORT || 3000

const app = express();

app.use('/', rotas) // Usando as rotas criadas

app.get('*', (req, res) => {    // Quando nenhuma rotas for encontrada da que criamos
    res.send("Jhonndev");
});

app.listen(porta, () => { console.log("Rodando !") })
