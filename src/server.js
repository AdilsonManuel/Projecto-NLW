const express = require("express")
const server = express()

//Pegar a bd
const db = require("./database/db")

//Configura pasta publica
server.use(express.static("public"))

//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

//Configurar caminhos da minha aplicação
//Página inicial
//res-> response - req->request
server.get("/", (req, res) => {
  return res.render("index.html", { title: "Um titulo" });
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.get("/search", (req, res) => {
  //pegar os dados do banco de dados
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length

    //console.log(" cadastrados");
    return res.render("search-results.html", { places: rows,total })
  })
})

//Ligar o servidor
server.listen(1303)
