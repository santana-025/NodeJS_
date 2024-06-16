(async () => {
    const integraçaoDB = require("08_CONECT+SELECT/08_Indx.js")
    console.log("Inserindo Novo Cliente")
    await integraçaoDB.insereUser({
        first_name: "Jorgin",
        last_names: "Santos",
        sallary: 5000,
        dob: "1999-05-22"
    })
    console.log("Obeter todos os Clientes")
    const clientes = await integraçaoDB.todosUser()
    console.log(clientes)

}
)()