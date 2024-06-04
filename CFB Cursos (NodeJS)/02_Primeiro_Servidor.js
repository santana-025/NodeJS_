// Status de Retorno > Notion Tabela Completa (http.cat)

const http = require("http");  // Ultilizando o modulo http 

// Sem Requisição //

// createServer precisa de uma função   Ordem : Requisição / resposta
http.createServer((request, response) => {    // Função com os parametros de (Requisição e Resposta) Pode ser qualquer nome
    response.writeHead(200, {                 // Resposta for codigo 200 = (ok) escreva no cabeçario 
        "Content-Type": "text/plain"          // tipo de retorno e texto normal
    });
    response.write("Jhonn Dev Init")          // Corpo da resposta
    response.end();                           // Fim da resposta
}).listen(1337);                              // Ouvindo a porta 1337  