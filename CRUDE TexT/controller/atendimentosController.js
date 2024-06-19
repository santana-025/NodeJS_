const atendimentosModel = require("../models/atendimentosmodel");

class AtendimentoController {
    buscar() {
        return atendimentosModel.listar()
    }
    criar() {
        return "Criando Atendimentos";
    }
    atualizar(id) {
        return `Atualizando o Atendimento : ${id}`;
    }
    apagar(id) {
        return `Apagando o Atendimento : ${id}`;
    }
}

module.exports = new AtendimentoController();