// FS = File Sistem Manipular arquivos (ler, criar, alterar, renomear)
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT
// Quando Faz uma auteração no html não precisa para o servidor pois não alteramos o servidor e sim o aquivo que ele esta carregando
const server = http.createServer((req, res) => {
    // Pegar o html e retorna quando fizer a chamada do servidor
    // fs.readFile = Ler aquivo
    // (nome do arquivo, função com (casso um erro,e retorno do arquivo aqui)
    fs.readFile('index.html', (err, arquivo) => {
        res.writeHead(200, { "content-Type": "text/html" })
        res.write(arquivo); // escreve o arquivo que foi retornado no corpo da pagina
        return res.end();
    })
})

server.listen(porta || 3000, () => (console.log("Servidor Rodando !")))