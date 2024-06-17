// FS = File Sistem Manipular arquivos (ler, criar, alterar, renomear)
const http = require('http')
const fs = require('fs')
const porta = process.env.PORT  // process.env.PORT = o host define caso não  consiga a estatica é 3000
// Quando Faz uma auteração no html não precisa para o servidor pois não alteramos o servidor e sim o aquivo que ele esta carregando
const server = http.createServer((req, res) => {
    // Pegar o html e retorna quando fizer a chamada do servidor
    // fs.appendFile =  cria e adiciona no aquivo     open ele abre
    // (nome do arquivo, o conteudo no arquivo, função com (casso um erro)
    fs.appendFile('apende.txt', 'Curso de Node', (err) => {
        if (err) throw err      // se tiver erro manda uma msg de erro
        console.log('Arquivo Criado')   // Caso contrario ele manda essa msg no console.log
        res.end();
    })
})

server.listen(porta || 3000, () => (console.log("Servidor Rodando !")))