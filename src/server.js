const express = require("express")
const server = express()

//Configurar caminhos da minha aplicação
//Página inicial
//res-> response - req->request
server.get("/", (req,res) =>{
    res.send("teste")
})

//Ligar o servidor
server.listen(1303)