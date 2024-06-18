// const Router = require("express").Router; Ambas as formas funcionam
const { Router } = require("express");
const send = require("send");
const router = Router();

// GET
router.get("/atendimentos", (req, res) => {
    res.send("Requisição GET > Listando os Atendimentos <")
});

// POST
router.post("/atendimentos", (req, res) => {
    res.send("Requisição POST > Atendimento Adicionado <")
});

// PUT
router.put("/atendimentos/:id", (req, res) => {
    const { id } = req.params;
    res.send("Requisição PUT > Atendimento Atualizado <")
});

// DELETE
router.delete("/atendimentos/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Requisição GET > Atendimento ${id} Deletado <`)
});

module.exports = router;