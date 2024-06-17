const mysql = require('mysql');

// Configuração da conexão com o MariaDB
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '.Parede100',
    database: 'Jdv'
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MariaDB: ' + err.stack);
        return;
    }
    console.log('Conexão estabelecida com o ID ' + connection.threadId);
});

// Exemplo de consulta
connection.query('SELECT * FROM users', (err, rows) => {
    if (err) throw err;

    console.log('Dados recebidos do MariaDB:');
    console.log(rows);
});

// Tentando fazer um SELECT 
const select = async () => {
    await connection.query("SELECT first_name FROM users", (err, rows) => {
        if (err) throw err;

        console.log('Nomes Recebidos do MariaDB:');
        console.log(rows);
    })
}
// Tentando Fazendo um DEL
const del = async () => {
    await connection.query("DELETE FROM users WHERE user_id = 1;", (err, rows) => {
        if (err) throw err;

        console.log('Dados Excluidos');
    })
}

// Tentando Atualizar um dado

const idd = 4;
const useratt = "Jhonnxh4"

const update = async () => {
    await connection.query('UPDATE users SET first_name = ? WHERE user_id = ?', [useratt, idd], (err) => {
        if (err) {
            throw err;
            console.log("Erro ao Atualizar")
        }
        console.log("Dados Atualizados")
    })
}


// Fazendo uma inserção
const novoUsuario = {               // Criando um novo usuario json estudar uma forma dinamica de fazer isso 
    "first_name": "zoee",
    "last_name": "Maria",
    "sallary": 2,
    "dob": "2000-05-12"
}


const add = async () => { // na query usamos o ?, novoUsuario fica no lugar da interrogação
    await connection.query('INSERT INTO users SET ?', novoUsuario, (err, rows) => {
        if (err) {
            throw err;
            console.log("Erro ao adicionar")
        }
        console.log("Dados Criados")
    })
}



update();
select();


// Encerrar conexão ao final do programa (não é necessário em produção, Node.js encerra conexões automaticamente)
connection.end();