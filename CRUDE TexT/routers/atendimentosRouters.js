// const Router = require("express").Router; Ambas as formas funcionam
const { Router } = require("express");
const send = require("send");
const router = Router();
const atendimentoController = require("../controller/atendimentosController");



// GET
router.get("/atendimentos", (req, res) => {
    const resposta = atendimentoController.buscar();
    res.send(resposta);
});

// POST
router.post("/atendimentos", (req, res) => {
    const resposta = atendimentoController.criar();
    res.send(resposta)
});

// PUT
router.put("/atendimentos/:id", (req, res) => {
    const { id } = req.params;
    const resposta = atendimentoController.atualizar(id);
    res.send(resposta)
});

// DELETE
router.delete("/atendimentos/:id", (req, res) => {
    const { id } = req.params;
    const resposta = atendimentoController.apagar(id);
    res.send(resposta);
});

module.exports = router;