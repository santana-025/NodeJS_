(async () => {
    const integraçaoDB = require("./09_insert")
    console.log("Inserir novo Cliente")
    await integraçaoDB.insereUser({
        "first_name": "Junior",
        "last_name": "Santos",
        "sallary": 5000,
        "dob": "1997-12-10"
    })
    console.log("Obeter todos os Clientes")
    const clientes = await integraçaoDB.todosUser()
    console.log(clientes)

}
)()
