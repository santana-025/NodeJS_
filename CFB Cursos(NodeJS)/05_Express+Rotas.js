// const http = require("http");
// const porta = process.env.PORT;

// const servidor = http.createServer((req, res) => {
//     res.writeHead(200, {                //
//         "content-Type": "text-plain"    // Pode ser assim ou ↓
//     })                                  //    

//     //  res.statusCode=200              // ← Ou Assim
//     //  res.writeHead(200,{"content-Type": "text-plain"}) 
//     res.end("JhonDev");
// })
// servidor.listen(porta || 3000, () => { console.log("Servidor Rodando") })

// Usando o modulo Express
const express = require("express")
const app = express();  // o express ja prepara quase tudo
const porta = process.env.PORT

//app. tem varias chamadas (get,post,push,delete...)
// Dentro da chamada get( "rota", (req, ress)=>{})
app.get("/", (req, res) => {
    // res. podemos mandar como resposta um send = mandar um conteudo, json
    res.send("Curso Top")
})

app.get("/canal", (req, res) => {
    res.json({ "Nome": "JhonDev" })
})

app.listen(porta || 3000, () => {
    console.log("Servidor Rodando!")
})
