//Importar dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

//Iniciar o objecto que irá fazer operações no banco de dados
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db
//utilizar o objecto de bd para nossas operações
/**db.serialize(() => {
    //1-criar uma tabela
    db.run(`
            CREATE TABLE IF NOT EXISTS places(
                placesPK INTEGER PRIMARY KEY AUTOINCREMENT,
                image TEXT,
                name TEXT,
                address TEXT,
                address2 TEXT,
                state TEXT,
                city TEXT,
                items TEXT
            );
        `)
    //2-Inserir dados na tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        address ,
        address2 ,
        state ,
        city ,
        items
    ) VALUES (?,?,?,?,?,?,?);
  `

    const values = [
        "https://images.unsplash.com/photo-1545303234-a34381f8b5cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria",
        "Guillherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Cadastrado com êxito")
        console.log(this)
    }

    //db.run(query,values,afterInsertData)
    
     
    //3-Consultar daddos na tabela
   db.all(`SELECT * FROM places`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão os registos cadastrados: ")
        console.log(rows)
    })   

    //4-Eliminar dados na tabela

    db.run(`DELETE FROM places WHERE placesPK = ?`, [1], function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("Eliminado com êxito")
        console.log(this)
    }) 

})*/