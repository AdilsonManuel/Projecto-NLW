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
   return res.render("index.html",{title: "Um titulo"})
})

server.get("/create-point", (req,res) =>{
    return res.render("create-point.html")
})

server.get("/search", (req,res) =>{
    return res.render("search-results.html")
})

//Ligar o servidor
server.listen(1303)