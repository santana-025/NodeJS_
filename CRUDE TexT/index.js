const { error } = require("console");
const express = require("express");
const app = express();
const porta = 3000
const router = require("./routers/index")
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabela")

tabelas.init(conexao);

router(app);

app.listen(porta, (error) => {
    if (error) {
        console.log("Error")
        return error
    }
    console.log(`Servidor Rodando na Porta: ${porta}`);
})