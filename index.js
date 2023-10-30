const { application } = require("express")
const path = require("path")
const express = require ("express")
const app = express()
const caminhoBase = path.join(__dirname, "templates")./templates

app.get('/', (requisicao, resposta) => {
   resposta.send("Estou funcionando express")
})

app.listen(3000, () => {
    console.log("servidor rodando na 3000!")

})