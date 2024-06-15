const conectar = async () => {
    if(global.conexao && global.conexao.state != 'disconected'){
        return global.conexao
    }
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:.Parede100localhost:3606/Jdv")
    console.log("Conectou ao Banco");
    global.conexao=con
    return con
}
conectar()

module.exports = {}
