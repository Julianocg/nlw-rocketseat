//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que ira fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//exportando
module.exports = db

//utilizar o objeto de banco de dados para nossas operações
// db.serialize(() => {

//     // 1 criar tabela com comandos sql
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT, 
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // // 2 inserir dados
//     // const query = `
//     // INSERT INTO places (
//     //     image,
//     //     name,
//     //     address,
//     //     address2,
//     //     state,
//     //     city,
//     //     items
//     // ) VALUES (?,?,?,?,?,?,?);
//     // `
    
//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]

//     // function afterInsertData(err){
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("cadastrado com sucesso")
//     //     console.log(this)
            
//     // }

//     // db.run(query, values, afterInsertData)      
        
    
    //3 consultar dados
    // db.all(`SELECT name FROM places`, function(err, rows){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("aqui estão seus registros: ")
    //     console.log(rows)
    // })

    // 4 deletar todo os dados. se quiser selecionar, utilizar o `DELETE FROM places WHERE id = ?`, [nºid], function...
//     db.run(`DELETE FROM places`, function(err){
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Registro deletado com sucesso!")
//     })

// })