const express = require("express")
const server = express()

//Configura pasta publica
server.use(express.static("public"))


//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{

    express: server,
    noCache: true

})

//Configurar caminhos da minha aplicação
//Página inicial
//res-> response - req->request
server.get("/", (req,res) =>{
    res.render("/index.html")
})

server.get("/create-point", (req,res) =>{
    res.render("create-point.html")
})

server.get("/search.results", (req,res) =>{
    res.render("search.results.html")
})

//Ligar o servidor
server.listen(1303)