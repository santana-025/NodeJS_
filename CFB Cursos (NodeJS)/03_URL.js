// Lidando melhor com a URL que temos na Requisição

const http = require("http");   // Usando o modulo "http"
const url = require("url");     // Usando o modulo "URL"
const porta = 3000;             // Setando a porta
const host = "127.0.0.1"        // Podemos mudar o localhost


const servidor = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-Type": "text/html"
    });
    // Parametro de entrada: 
    res.write(req.url);  // Me retorna a rota que for digitada. caso não tenha me return host "/"
    const param = url.parse(req.url, true).query;   // Transforma em textos
    res.write('<br/>' + param.nome);    // 1 Parametro de entrada
    res.write('<br/>' + param.cidade);  // 2 Parametro de entrada  
    // Return :             /? para passar os parametros e = & espaço = +
    // http://localhost:3000/?nome=jorge&cidade=Valenca >>
    // /?nome=jorge&cidade=Valenca
    // jorge
    // Valenca



    res.end();      // Fim da resposta
})

servidor.listen(porta, host, () => { console.log("Servidor Rodando !") });