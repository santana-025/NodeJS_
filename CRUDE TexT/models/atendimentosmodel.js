const conexao = require("../infraestrutura/conexao");
class AtendimentoModel {
    listar() {
        const sql = "SELECT * FROM atendimentos";
        return new Promise((resolve, reject) => {
            return conexao.query(sql, {}, (erro, resposta) => {
                if (erro) {
                    console.log("Deu Erro no Listar")
                    reject(error);
                }
                console.log("Atendimentos Listado")
                resolve(resposta);
            })
        })

    }

}

module.exports = new AtendimentoModel();