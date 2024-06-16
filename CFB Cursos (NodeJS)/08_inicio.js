
(async () => {
    const inteDB = require("./08_CRUD")
    console.log("Inserindo Novo Cliente")
    const novouser = {
        first_name: "Jorgin",
        last_names: "Santos",
        sallary: 5000,
        dob: "1999-05-22"
    }
    await inteDB.InserindoUsers(novouser)
    console.log("Obter todos os Clientes")
    const clientes = await inteDB.todosUsers()
    console.log(clientes)

}
)()