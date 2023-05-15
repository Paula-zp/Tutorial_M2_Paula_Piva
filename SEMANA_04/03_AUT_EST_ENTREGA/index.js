const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './data/curriculo_01.db';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
const db = new sqlite3.Database(DBPATH, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the database.');
    }
});
//create
app.post("/formacao/add", (req, res) =>{
    const sql = "INSERT INTO formacao (usuario_id, curso, ano_inicial, ano_final, descricao) VALUES(?, ?, ?, ?, ?)"
    const {usuario_id, curso, ano_inicial, ano_final, descricao} = req.body
    const values = [usuario_id, curso, ano_inicial, ano_final, descricao]
    db.run(sql, values, (error, rows) =>{
        if(error){
            throw error
        }
        else{
            res.status(200).send("Enviado!")
        }
    })
})
//read formacao
app.get("/formacao", (req, res) =>{
    const sql = "SELECT * FROM formacao"
    db.all(sql, (error, rows) =>{ 
        if (error){
            throw error
        }
        else{
            res.json(rows)
        }
    })
})

//update
app.put("/formacao/atualizar/:id", (req, res) =>{
    const sql = `UPDATE formacao SET usuario_id = ?, curso = ?, ano_inicial = ?, ano_final = ?, descricao = ? WHERE id = ${req.params.id}`
    const {usuario_id, curso, ano_inicial, ano_final, descricao} = req.body
    const values = [usuario_id, curso, ano_inicial, ano_final, descricao]
    db.run(sql, values, (error, rows) =>{
        if(error){
            throw error
        }
        else{
            res.status(200).send("Atualizado!")
        }
    })
})

//delete
app.delete("/formacao/deletar/:id", (req, res) =>{
    const sql = `DELETE FROM formacao WHERE id = ${req.params.id}`
    db.run(sql, (error, rows) =>{
        if(error){
            throw error
        }
        else{
            res.status(200).send("Deletado!")
        }
    })
})

app.get("/usuario", (req, res) =>{
    const sql = "SELECT * FROM usuario"
    db.all(sql, (error, rows) =>{ 
        if (error){
            throw error
        }
        else{
            res.json(rows)
        }
    })
})

app.get("/habilidades", (req, res) =>{
    const sql = "SELECT * FROM habilidades"
    db.all(sql, (error, rows) =>{ 
        if (error){
            throw error
        }
        else{
            res.json(rows)
        }
    })
})

app.get("/informacoes", (req, res) =>{
    const sql = "SELECT * FROM informacoes"
    db.all(sql, (error, rows) =>{ 
        if (error){
            throw error
        }
        else{
            res.json(rows)
        }
    })
})

app.get("/personalidade", (req, res) =>{
    const sql = "SELECT * FROM personalidade"
    db.all(sql, (error, rows) =>{ 
        if (error){
            throw error
        }
        else{
            res.json(rows)
        }
    })
})

app.get("/realizacoes", (req, res) =>{
    const sql = "SELECT * FROM realizacoes"
    db.all(sql, (error, rows) =>{ 
        if (error){
            throw error
        }
        else{
            res.json(rows)
        }
    })
})

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });