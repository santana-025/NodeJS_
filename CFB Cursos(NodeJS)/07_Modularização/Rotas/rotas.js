const express = require("express");
const { Module } = require("module");
const rotas = express.Router()
let cursosInfo = [
    { "curso": "Java", "info": "Curso Java" },
    { "curso": "SQL", "info": "Curso SQL" },
    { "curso": "Python", "info": "Curso Python" }
]

rotas.get("/", (req, res) => {
    res.json({ ola: "Seja Bem0Vindo" })
})

rotas.get("/:cursoId", (req, res) => {
    const curso = req.params.cursoId
    const cursoI = cursosInfo.find((i) => i.curso == curso)
    if (!cursoI) {
        res.status(404).json(
            { erro: "Curso não Encontrado", cursoPesquisado: curso }
        )
    } else {
        res.status(200).json(cursoI)
    }
})
module.exports = rotas