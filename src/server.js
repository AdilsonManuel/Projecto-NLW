const express = require("express")
const server = express()

//Configura pasta publica
server.use(express.static("public"))


//Utilizando template engine
const nunjucks = require("nunjucks")

//Configurar caminhos da minha aplicação
//Página inicial
//res-> response - req->request
server.get("/", (req,res) =>{
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req,res) =>{
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search.results", (req,res) =>{
    res.sendFile(__dirname + "/views/search.results.html")
})

//Ligar o servidor
server.listen(1303)