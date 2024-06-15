(async () => {
    const integraçaoDB = require("./08_IntegraçãoDB")
    console.log("Obeter todos os Clientes")
    const clientes = await integraçaoDB.todosUser()
    console.log(clientes)
    
}
)()
