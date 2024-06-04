
const http = require("http");   // Usando o modulo "http"
const porta = 3000;         // Setando a porta
const host = "127.0.0.1"   // Podemos mudar o localhost


const servidor = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-Type": "text/html"
    });
    // criando Rotas : 
    if (req.url == '/') {     // Precisamos pegar a requisição e comparar sua url com a URL
        res.write("<h1> Seja Bem-Vindo </h1>");
    } else if (req.url == '/servicos') {            // criando a rota /servicos
        res.write("<h1> Qual Serviço Deseja ? </h1>");
    } else if (req.url == '/contatos') {            // criando a rota /contatos
        res.write("<h1> nuemero: 0000-0000 </h1>");
    } else if (req.url == '/contatos/email') {      // criando a rota /contatos/email
        res.write("<h1> jhnDev@gmail.com </h1>");
    }
    res.end();      // Fim da resposta
})

servidor.listen(porta, host, () => { console.log("Servidor Rodando !") });

// Parametros que o listen pode receber
// listen(porta, host, função backlog)  * Pode ser uma msg no lugar da função ou arrowfuntion


// res.writeHead(status, {"tipo de retorno" : "normal ou html"}
// "content-Type":"text/html" =  Texto Html
// "content-Type":"text/plan" =  Texto Normal
// "content-Type":"text/json" =  Texto JSON