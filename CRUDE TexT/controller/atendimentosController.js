class AtendimentoController {
    buscar() {
        return "Buscando Atendimentos"
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