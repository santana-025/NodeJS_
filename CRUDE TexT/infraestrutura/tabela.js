class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarTabelaAtendimentos();
    }

    criarTabelaAtendimentos() {
        const sql =
            `CREATE TABLE IF NOT EXISTS atendimentos (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        DATA DATE,
        servico VARCHAR(100),
        cliente VARCHAR(100),
        STATUS ENUM("Ativo", "Realizado", "Cancelado") DEFAULT "Ativo"
        );
        `
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log("Erro na Criaçao da Tabela do BANCO DE DADOS")
                console.log(error.message);
                return;
            }
            console.log("Tabela Criada com Sucesso")
        })
    }
}

module.exports = new Tabelas();