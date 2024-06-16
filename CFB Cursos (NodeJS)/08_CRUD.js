const conectar = async () => {
    if (global.conexao && global.state != "disconected")
        return global.conexao
    const mysql = require("mysql2/promise")
    const con = mysql.createConnection("mysql://root:.Parede100@localhost:3306/Jdv")
    console.log("Conectou ao DATA BASE")
    global.conexao = con
    return con
}

// SELECIONANDO
export const todosUsers = async () => {
    const con = await conectar()
    const [linhas] = await con.query("SELECT * FROM users")
    return await linhas
}
// ADICIONANDO
export const InserindoUser = async (cliente) => {
    const con = await conectar()
    const sql = "INSERT INTO users (first_name, last_name, sallary, dob) VALUES (?,?,?,?)"
    const valores = [cliente.first_name, cliente.last_name, cliente.sallary, cliente.dob]
    await con.query(sql, valores);
}
