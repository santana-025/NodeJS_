const conectar = async () => {
    if (global.conexao && global.conexao.state != 'disconected') {
        return global.conexao
    }
    const mysql = require("mysql2/promise")
    const con = mysql.createConnection("mysql://root:.Parede100@localhost:3306/Jdv")
    console.log("Conectou ao Banco")
    global.conexao = con
    return con
}
// Select 

const todosUser = async () => {
    const con = await conectar()
    const [linhas] = await con.query("SELECT * FROM users")
    return await linhas
}

module.exports = { todosUser }